export const ProductDetailsModel = (
  productTitle,
  productDetails,
  images,
  tags,
  basePrice,
  userFullName,
  userPhotoUrl,
  userId,
  endDate,
  startDate
) => {
  return {
    title: productTitle,
    productDetails: productDetails,
    images: images,
    tags: tags,
    basePrice: parseFloat(basePrice),
    postedBy: {
      fullName: userFullName ?? null,
      photoUrl: userPhotoUrl ?? null
    },
    userId: userId,
    postedOn: new Date(),
    endDate: endDate,
    startDate: startDate
  }
}
