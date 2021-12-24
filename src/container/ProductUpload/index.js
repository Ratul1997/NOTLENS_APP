import React, { useState, useRef } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import DropdownAlert from "react-native-dropdownalert";
import { colors, theme } from "../../configs/colors";
import CustomHeader from "../../components/CommonHeader";
import CustomIcons from "../../components/CustomIcons";
import { getFontFamily, normalize } from "../../styles/utilityStyle";
import ImagePlaceHolders from "./ImagePlaceHolders";
import CustomTextInput from "../../components/CustomTextInput";
import ProductTags from "./ProductTags";
import CustomButton from "../../components/CustomButton";
import userFunctions from "../../customFunctions/userFunctions";
import { isStringEmpty } from "../../utility/utils";
import { ProductDetailsModel } from "../../model/productModels";
import productFunctions from "../../customFunctions/productFunctions";

const uid = 1;
export default function index({ navigation }) {
  const initialState = {
    title: "",
    basePrice: "",
    productDetails: "",
  };
  const [images, setImages] = useState([]);
  const [productTags, setProductTags] = useState([]);
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const dropDownRef = useRef();
  const onChange = (key, value) => {
    setState({
      ...state,
      [key]: value,
    });
  };
  const LeftIconHeader = () => {
    return (
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{ justifyContent: "center" }}
      >
        {/* <CustomIcon name="ic_arrow_left" color="white" size={20} /> */}
        <CustomIcons.Ionicons
          name="chevron-back-sharp"
          color={colors.lightBlack}
          size={normalize(20)}
        />
      </TouchableOpacity>
    );
  };

  const onUploadProduct = async () => {
    console.log(productTags, images, state);
    if (images.length < 0) {
      return dropDownRef.current.alertWithType(
        "error",
        "Error",
        "Please Select Minimum four images"
      );
    }
    if (
      isStringEmpty(state.basePrice) ||
      isStringEmpty(state.productDetails) ||
      isStringEmpty(state.title)
    ) {
      return dropDownRef.current.alertWithType(
        "error",
        "Error",
        "Product title, product details and base price are required!"
      );
    }
    if (productTags.length < 2) {
      return dropDownRef.current.alertWithType(
        "error",
        "Error",
        "Minimum 2 tags are required!"
      );
    }
    setLoading(true);
    try {
      const uploadImages = await userFunctions.multipleFileUpload(
        images,
        "images"
      );
      const productData = ProductDetailsModel(
        state.title,
        state.productDetails,
        uploadImages,
        productTags,
        state.basePrice,
        "Raatul Bhowmick",
        null,
        uid
      );

      await productFunctions.productUpload(productData);
      dropDownRef.current.alertWithType(
        "success",
        "Success",
        "Successfully Uploaded"
      );
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.backgroundColor }}>
      <DropdownAlert ref={dropDownRef} />
      <CustomHeader title="Seller" LeftIcon={LeftIconHeader()} />
      <KeyboardAwareScrollView>
        <View>
          <ImagePlaceHolders
            images={images}
            setImages={setImages}
            navigation={navigation}
          />
          <View style={{ marginVertical: normalize(8) }}>
            <CustomTextInput
              placeholder={"Product Title"}
              borderRadius={normalize(6)}
              onChangeText={(text) => onChange("title", text)}
              value={state.title}
            />
          </View>
          <View style={{ marginVertical: normalize(8) }}>
            <CustomTextInput
              placeholder={"Base Price"}
              borderRadius={normalize(6)}
              keyboardType={"number-pad"}
              onChangeText={(text) => onChange("basePrice", text)}
              value={state.basePrice}
            />
          </View>
          <View style={{ marginVertical: normalize(8) }}>
            <CustomTextInput
              placeholder={"Product Details"}
              borderRadius={normalize(6)}
              multiline={true}
              onChangeText={(text) => onChange("productDetails", text)}
              value={state.productDetails}
            />
          </View>
          <ProductTags
            productTags={productTags}
            setProductTags={setProductTags}
          />
          <View
            style={{
              alignItems: "center",
              marginVertical: normalize(15),
            }}
          >
            <CustomButton
              width={"90%"}
              filled={true}
              title={"Post Product"}
              onPress={loading ? null : onUploadProduct}
              borderRadius={normalize(10)}
              isLoading={loading}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}
