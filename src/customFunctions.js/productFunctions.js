import firestore from '@react-native-firebase/firestore';
import PromiseModule from '../helpers/PromiseModule';

const productUpload = async productData => {
  return await PromiseModule.storeData('Products', productData);
};

const productFunctions = {
  productUpload,
};
export default productFunctions;
