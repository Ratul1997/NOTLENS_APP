import {Platform} from 'react-native';

// const multipleFileUpload = async (files, type) => {
//   return await Promise.all(
//     files.map(async file => {
//       const uri = file.path;

//       const fileName =
//         new Date().getTime().toString() + uri.split(/['/',]+/).pop();
//       const uploadUri =
//         Platform.OS === 'ios' ? uri.replace('file://', '') : uri;

//       const task = storage().ref(`${type}/${fileName}`).putFile(uploadUri);
//       const url = await new Promise((resolve, reject) => {
//         task.on(
//           'state_changed',
//           snapshot => {
//             console.log(
//               Math.round(snapshot.bytesTransferred / snapshot.totalBytes) *
//                 10000,
//             );
//           },
//           error => reject(error),

//           async () => {
//             const downloadUrl = await task.snapshot.ref.getDownloadURL();
//             resolve(downloadUrl);
//           },
//         );
//       });

//       return {url};
//     }),
//   );
// };

const userFunctions = {};
export default userFunctions;
