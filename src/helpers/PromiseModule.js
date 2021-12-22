import firestore from '@react-native-firebase/firestore'
const updateDocumentsById = async (
  collectionName,
  documentKey,
  updatedData,
) => {
  const ref = firestore()
    .collection(collectionName)
    .doc(documentKey)
  return await ref.update({
    ...updatedData,
  })
}
const getDataByCollection = async (
  collectionName,
  keyName = null,
  keyValue = null,
  lastVisible = null,
  limit = 16,
) => {
  let ref = firestore().collection(collectionName)
  ref = keyValue ? ref.where(keyName, '==', keyValue) : ref

  ref = lastVisible === null ? ref : ref.startAfter(lastVisible).limit(limit)

  return new Promise(async (resolve, reject) => {
    try {
      const querySnapShot = await ref.get()
      const datas = querySnapShot.docs.map(doc => {
        return {
          id: doc.id,
          ...doc.data(),
        }
      })

      const lastVisible = querySnapShot.docs[querySnapShot.docs.length - 1]

      resolve({
        data: datas,
        lastVisible: lastVisible,
        total: datas.length,
      })
    } catch (error) {
      reject(error)
    }
  })
}

const getDataByDoc = async (collectionName, docId) => {
  console.log(docId)
  return new Promise(async (resolve, reject) => {
    firestore()
      .collection(collectionName)
      .doc(docId)
      .get()
      .then(snapshot => {
        // const data = snapshot.data().forEach(doc => {
        //   return {
        //     ...doc.data(),
        //     id: doc.id,
        //   }
        // })
        resolve({
          ...snapshot.data(),
          id: docId,
        })
      })
      .catch(err => {
        reject(err)
      })
  })
}

const storeData = async (collectionName, data, docId = null) => {
  return docId === null
    ? await firestore()
        .collection(collectionName)
        .add({...data})
    : await firestore()
        .collection(collectionName)
        .doc(docId)
        .set({...data})
}

const PromiseModule = {
  updateDocumentsById,
  getDataByDoc,
  getDataByCollection,
  storeData,
}

export default PromiseModule
