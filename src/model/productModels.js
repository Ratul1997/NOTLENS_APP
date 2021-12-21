export const ProductDetailsModel = (
  productTitle,
  productDetails,
  images,
  tags,
  basePrice,
  userFullName,
  userPhotoUrl,
  userId,
) => {
  return {
    title: productTitle,
    productDetails: productDetails,
    images: images,
    tags: tags,
    basePrice: parseFloat(basePrice),
    postedBy: {
      fullName: userFullName ?? null,
      photoUrl: userPhotoUrl ?? null,
    },
    userId: userId,
    postedOn: new Date(),
  };
};
