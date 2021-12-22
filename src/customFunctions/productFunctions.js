import firestore from '@react-native-firebase/firestore'
import PromiseModule from '../helpers/PromiseModule'

const productUpload = async productData => {
  return await PromiseModule.storeData('Products', productData)
}

const getProductDetailsById = async productId => {
  return await PromiseModule.getDataByDoc('Products', productId)
}

const getAllProducts = async (lastVisible, limit) => {
  return await PromiseModule.getDataByCollection(
    'Products',
    null,
    null,
    lastVisible,
    limit,
  )
}

const productFunctions = {
  productUpload,
  getAllProducts,
  getProductDetailsById,
}
export default productFunctions
