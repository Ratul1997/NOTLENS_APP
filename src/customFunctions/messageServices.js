import firestore from '@react-native-firebase/firestore'
import { getCurrentTime } from '../utility/utils'
import storage from '@react-native-firebase/storage'

const sendMessage = async (from, text, dateTime, docKey, file = null) => {
  return await firestore()
    .collection('Messages')
    .doc(docKey)
    .collection('messages')
    .add({
      senderId: from,
      text: text || null,
      dateTime: dateTime,
      read: 0,
      file: file
    })
}

const storeFirstMessage = async (from, to, dateTime, docKey) => {
  return await firestore()
    .collection('Messages')
    .doc(docKey)
    .set({
      initialMessage: [from, to, dateTime],
      unread: 0
    })
}
const storeLastMessage = async (from, to, text, dateTime, docKey) => {
  return await firestore()
    .collection('Messages')
    .doc(docKey)
    .update({
      lastMessage: {
        from: from,
        to: to,
        text: text,
        dateTime: dateTime
      }
    })
}

const updateReadMassage = async (docKey, messageKey) => {
  return await firestore()
    .collection('Messages')
    .doc(docKey)
    .collection('messages')
    .doc(messageKey)
    .update({
      read: 1
    })
}

const onIncrementUnRead = docKey => {
  const messageRef = firestore()
    .collection('Messages')
    .doc(docKey)

  return firestore().runTransaction(async transaction => {
    const messageSnapShot = await transaction.get(messageRef)
    if (!messageSnapShot) {
      throw 'Message does not exists'
    }
    transaction.update(messageRef, {
      unread: messageSnapShot.data().unread + 1
    })
  })
}

const onDecrementUnRead = docKey => {
  const messageRef = firestore()
    .collection('Messages')
    .doc(docKey)

  return firestore().runTransaction(async transaction => {
    const messageSnapShot = await transaction.get(messageRef)
    if (!messageSnapShot) {
      throw 'Message does not exists'
    }
    transaction.update(messageRef, {
      unread: messageSnapShot.data().unread - 1
    })
  })
}

const checkDocumentExistsInCollection = async (from, to, docKey) => {
  return new Promise(async (resolve, reject) => {
    await firestore()
      .collection('Messages')
      .doc(docKey)
      .get()
      .then(docSnapshot => {
        if (docSnapshot.exists) {
          resolve({ message: 'Sucesfull' })
        } else {
          reject({ error: 'Chat already exists' })
        }
      })
      .catch(error => {
        console.log(error, 'asdasd')
        reject({ error: error.toString() })
      })
  })
}

const storeFilesInFireStore = async (fileName, data, dockKey, text) => {
  return new Promise(async (resolve, reject) => {
    try {
      const ff = await storage()
        .ref(`images/${fileName}`)
        .getDownloadURL()
        .catch(error => {
          throw error
        })
      await sendMessage(data.uid, null, new Date(data.dateTime), dockKey, {
        path: ff,
        size: data.file.size
      })
      await onIncrementUnRead(dockKey)
      const to = dockKey.split(':').filter(x => x !== data.uid)[0]
      await storeLastMessage(
        data.uid,
        to,
        text,
        new Date(data.dateTime),
        dockKey
      )
    } catch (error) {
      reject({ error: 'Something Went Wrong' })
    }
  })
}

const messageServices = {
  sendMessage,
  checkDocumentExistsInCollection,
  storeFirstMessage,
  storeLastMessage,
  updateReadMassage,
  onIncrementUnRead,
  onDecrementUnRead,
  storeFilesInFireStore
}

export default messageServices
