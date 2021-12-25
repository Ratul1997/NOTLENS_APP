import React, { Component, useState, useEffect } from 'react'
import {
  FlatList,
  Pressable,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomSearchComponent from '../../components/CustomSearchComponent'
import Lottie from '../../components/loader/Lottie'
import ProductItemComponent from '../../components/product/ProductItemComponent'
import { colors, theme } from '../../configs/colors'
import { homeTabCategories } from '../../constants/customData/HomeTab'
import productFunctions from '../../customFunctions/productFunctions'
import { getFontFamily, normalize } from '../../styles/utilityStyle'
export default function Home ({ navigation }) {
  const [selectedCategory, setSelectedCategory] = useState(1)
  const [products, setProducts] = useState([])
  const [lastVisible, setLastVisible] = useState(null)
  const [loadMore, setLoadMore] = useState(true)
  const [isLoading, setIsLoading] = useState(true)
  const LIMIT = 16
  useEffect(() => {
    const subscrbed = loadProducts()
    return () => subscrbed
  }, [])

  const loadProducts = async (lastVisible = null) => {
    try {
      const res = await productFunctions.getAllProducts(lastVisible, LIMIT)
      console.log(res, 'res')

      setProducts(
        lastVisible === null ? [...res.data] : [...products, ...res.data]
      )
      setLastVisible(lastVisible)
      setLoadMore(res.total < LIMIT ? false : true)
      setIsLoading(false)
    } catch (error) {}
  }

  const renderOptions = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
          // justifyContent: 'center',
          alignSelf: 'center',
          paddingHorizontal: normalize(20),
          borderBottomColor: colors.gray,
          borderBottomWidth: 0.3,
          marginVertical: normalize(10)
        }}
      >
        {homeTabCategories.map((category, index) => {
          return (
            <Pressable
              style={{
                justifyContent: 'center',
                alignItems: 'center',

                height: normalize(35),
                width: '25%',
                borderBottomColor:
                  selectedCategory === index
                    ? theme.primaryColor
                    : 'transparent',
                borderBottomWidth: selectedCategory === index ? 1 : 0
              }}
              key={index}
              onPress={() => setSelectedCategory(index)}
            >
              <Text
                style={{
                  color: theme.fontColor,
                  fontSize: normalize(11),
                  textAlign: 'center',
                  fontWeight: 'bold',
                  fontFamily: getFontFamily()
                }}
              >
                {category.title}
              </Text>
            </Pressable>
          )
        })}
      </View>
    )
  }
  const renderItem = ({ item, index }) => {
    return (
      <ProductItemComponent
        title={item.title}
        basePrice={item.basePrice}
        imageUrl={item.images[0].url}
        onPress={() =>
          navigation.navigate('ProductDetails', {
            productId: item.id,
            productDetails: JSON.stringify(item)
          })
        }
      />
    )
  }
  return (
    <SafeAreaView
      style={{
        backgroundColor: theme.backgroundColor,
        flex: 1,
        paddingTop: normalize(20)
      }}
    >
      <CustomSearchComponent placeHolder='Search for anything' />
      {renderOptions()}
      {isLoading ? (
        <Lottie />
      ) : (
        <FlatList
          data={products}
          style={{ paddingHorizontal: 10 }}
          numColumns={2}
          keyExtractor={(item, index) => item.id}
          renderItem={renderItem}
          onEndReached={loadMore && loadProducts(lastVisible)}
          // onRefresh={() => loadProducts(null)}
          // refreshing={}
        />
      )}
      {/* <View style={{flexDirection: 'row', paddingHorizontal: 10}}>
        <ProductItemComponent />
        <ProductItemComponent />
      </View>
      <View style={{flexDirection: 'row', paddingHorizontal: 10}}>
        <ProductItemComponent />
        <ProductItemComponent />
      </View>
      <View style={{flexDirection: 'row', paddingHorizontal: 10}}>
        <ProductItemComponent />
        <ProductItemComponent />
      </View> */}
    </SafeAreaView>
  )
}
