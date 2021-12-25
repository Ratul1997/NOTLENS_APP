export const AuctionModel = (
  price,
  userId,
  productId,
  userName = '',
  photoUrl = '',
  fullName = ''
) => {
  return {
    postedBy: {
      userName: userName,
      photoUrl: photoUrl,
      fullName: fullName
    },
    postedOn: new Date(),
    price: price,
    productId: productId,
    userId: userId
  }
}
