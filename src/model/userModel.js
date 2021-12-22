export const userModel = (
  userName,
  fullName,
  email,
  phoneNumber,
  nId,
  userId = null,
  profileImage = null,
  activeRole = 'Bidder',
) => {
  //   console.log('userFUn', userData);
  return {
    userId: userId,
    userName: userName,
    fullName: fullName,
    email: email,
    phoneNumber: phoneNumber,
    nId: nId,
    profileImage: profileImage,
    activeRole: activeRole,
    createdOn: new Date(),
  };
};
