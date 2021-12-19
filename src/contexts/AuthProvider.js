import React, {Children, createContext, useState} from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (email, password) => {
          try {
            await auth().signInWithEmailAndPassword(email, password);
          } catch (error) {
            console.log(error);
          }
        },
        signUp: async (
          userName,
          email,
          phoneNumber,
          userRole,
          nidNumber,
          password,
        ) => {
          try {
            await auth()
              .createUserWithEmailAndPassword(email, password)
              .then(async userCredentials => {
                const user = userCredentials.user;
                await firestore().collection('Users').add({
                  userId: user.uid,
                  email: email,
                  userName: userName,
                  phoneNumber: phoneNumber,
                  userRole: userRole,
                  nId: nidNumber,
                  activeRole: userRole,
                  fullName: null,
                });
              });

            // await firestore().collection('Users').add({
            //   userId: user.uid,
            // });
          } catch (error) {
            console.log(error);
          }
        },
        logOut: async () => {
          try {
            await auth().signOut();
          } catch (error) {
            console.log(error);
          }
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};
