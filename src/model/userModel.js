export const userModel = (
  userName,
  fullName,
  email,
  phoneNumber,
  nId,
  uid,
  profileImage = null,
  activeRole = 'Bidder',

) => {
  //   console.log('userFUn', userData);
  return {
    userName: userName,
    fullName: fullName,
    email: email,
    phoneNumber: phoneNumber,
    nId: nId,
    profileImage: profileImage,
    activeRole: activeRole,
    createdOn: new Date(),
    uid: uid
  }
}
