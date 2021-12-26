import { Platform } from 'react-native'
import storage from '@react-native-firebase/storage'
import PromiseModule from '../helpers/PromiseModule'
import firestore from '@react-native-firebase/firestore'
const multipleFileUpload = async (files, type) => {
  return await Promise.all(
    files.map(async file => {
      const uri = file.path

      const fileName =
        new Date().getTime().toString() + uri.split(/['/',]+/).pop()
      const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri

      const task = storage()
        .ref(`${type}/${fileName}`)
        .putFile(uploadUri)
      const url = await new Promise((resolve, reject) => {
        task.on(
          'state_changed',
          snapshot => {
            console.log(
              Math.round(snapshot.bytesTransferred / snapshot.totalBytes) *
                10000
            )
          },
          error => reject(error),

          async () => {
            const downloadUrl = await task.snapshot.ref.getDownloadURL()
            resolve(downloadUrl)
          }
        )
      })

      return { url }
    })
  )
}

const getUserInfo = async uid => {
  return new Promise(async (resolve, reject) => {
    firestore()
      .collection('Users')
      .doc(uid)
      .get()
      .then(documentSnapshot => {
        if (documentSnapshot.exists) {
          resolve({ userData: documentSnapshot.data() })
        } else {
          reject({
            error: {
              msg: 'Invalid User'
            }
          })
        }
      })
      .catch(error => {
        const err = {
          msg: 'Something went wrong!'
        }
        reject(err)
      })
  })
}
const createUser = async (userData, uid) => {
  // console.log('user',userData)
  return await PromiseModule.storeData('Users', userData, uid)
}

const userFunctions = { multipleFileUpload, createUser, getUserInfo }
export default userFunctions
