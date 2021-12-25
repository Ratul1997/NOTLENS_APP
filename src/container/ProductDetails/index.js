import React, { useEffect, useState } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  Pressable
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomIcons from '../../components/CustomIcons'
import { colors, theme } from '../../configs/colors'
import {
  getHeightWidthOfScreen,
  normalize,
  shadow
} from '../../styles/utilityStyle'
import CustomHeader from '../../components/CommonHeader'
import productFunctions from '../../customFunctions/productFunctions'
import CacheImageComponent from '../../components/imageViewer/CacheImageComponent'

import { SwiperFlatList } from 'react-native-swiper-flatlist'
import CustomButton from '../../components/CustomButton'
import BottomSheet from '../../components/modals/BottomSheet'
import ProductInfo from './ProductInfo'
const [HEIGHT, WIDTH] = getHeightWidthOfScreen()
export default function index ({ route, navigation }) {
  const [productDetails, setProductDetails] = useState({})
  const [isBottomSheetOpen, setBottomSheet] = useState(false)
  useEffect(() => {
    if (route.params?.productDetails) {
      const productDetails = JSON.parse(route.params.productDetails)
      setProductDetails(productDetails)
    }
    // const subscrbed = loadProductDetails()
    // return () => subscrbed
  }, [])

  const toggleBottomSheet = () => setBottomSheet(!isBottomSheetOpen)

  const loadProductDetails = async () => {
    try {
      const response = await productFunctions.getProductDetailsById(
        route?.params?.productId
      )
      setProductDetails({ ...response })
    } catch (error) {
      console.log(error)
    }
  }

  const onBidPress = () => {
    toggleBottomSheet()
    navigation.navigate('Auction', {
      productId: productDetails.id,
      productDetails: JSON.stringify(productDetails),
      basePrice: productDetails.basePrice
    })
  }
  const onQAndA = () => {
    // navigation.navigate
    toggleBottomSheet()
  }

  const LeftIconHeader = () => {
    return (
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          justifyContent: 'center',
          position: 'absolute',
          left: 10,
          top: 10,
          backgroundColor: theme.backgroundColor,
          borderRadius: normalize(50),
          ...shadow
        }}
      >
        {/* <CustomIcon name="ic_arrow_left" color="white" size={20} /> */}
        <CustomIcons.Ionicons
          name='chevron-back-sharp'
          color={theme.primaryColor}
          size={normalize(25)}
        />
      </TouchableOpacity>
    )
  }

  const renderItem = ({ item, index }) => {
    console.log(item.url)
    return (
      <Pressable onPress={toggleBottomSheet}>
        <Image
          style={{ height: HEIGHT, width: WIDTH }}
          source={{ uri: item.url }}
          resizeMode='contain'
        />
      </Pressable>
    )
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.backgroundColor }}>
      <SwiperFlatList
        style={{ height: '100%', width: '100%', backgroundColor: colors.black }}
        data={productDetails.images}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        // showPagination
      />

      <CustomButton
        customStyle={{ position: 'absolute', right: 10, top: 10, ...shadow }}
        width={'20%'}
        title={'Details'}
        borderRadius={normalize(8)}
        // filled
        bordered
        onPress={toggleBottomSheet}
      />
      {LeftIconHeader()}
      <BottomSheet modalVisible={isBottomSheetOpen} onClose={toggleBottomSheet}>
        {/* 
          <Text style={{color: 'white'}} onPress={this.onToggleBottomSheet}>
            hi
          </Text> */}
        <View
          style={{
            backgroundColor: theme.backgroundColor,
            height: HEIGHT / 1.3,
            borderTopRightRadius: normalize(30),
            borderTopLeftRadius: normalize(30)
          }}
        >
          <ProductInfo
            onBidNow={onBidPress}
            onQandA={onQAndA}
            productDetails={productDetails}
          />
        </View>
      </BottomSheet>
    </SafeAreaView>
  )
}
