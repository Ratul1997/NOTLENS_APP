import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, FlatList, TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors, theme } from '../../configs/colors'
import CommonHeader from '../../components/CommonHeader'
import CustomIcons from '../../components/CustomIcons'
import firestore from '@react-native-firebase/firestore'
import { getFontFamily, normalize, shadow } from '../../styles/utilityStyle'
import ModalComponent from '../../components/ModalComponent'
import CustomButton from '../../components/CustomButton'
import CustomTextInput from '../../components/CustomTextInput'
import { AuctionModel } from '../../model/AuctionModel'
import PromiseModule from '../../helpers/PromiseModule'
import AuctionItem from './AuctionItem'
import { getUserId } from '../../utility/utils'
import userFunctions from '../../customFunctions/userFunctions'
export default function index ({ navigation, route }) {
  const [auctionList, setAuctionList] = useState([])
  const [isModalOpen, setModalOpen] = useState(false)
  const [highestBiddingPrice, setHighestBiddingPrice] = useState(0)
  const [biddingPrice, setBiddingPrice] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    const productId = route.params?.productId
    const basePrice = route.params?.basePrice
    console.log(productId)
    const subscriber = firestore()
      .collection('Auction')
      .where('productId', '==', productId)
      .onSnapshot(querySnapshot => {
        console.log(querySnapshot)
        const auctionList = querySnapshot.docs
          .map(doc => {
            return {
              ...doc.data(),
              id: doc.id
            }
          })
          .sort((a, b) => a.price < b.price)

        setAuctionList(auctionList)
        setHighestBiddingPrice(auctionList?.[0]?.price ?? basePrice)
        setBiddingPrice(auctionList?.[0]?.price + 1 ?? basePrice + 1)
      })

    // Stop listening for updates when no longer required
    return () => subscriber()
  }, [])

  const toggleMenu = () => setModalOpen(!isModalOpen)
  const LeftIconHeader = () => {
    return (
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{ justifyContent: 'center' }}
      >
        {/* <CustomIcon name="ic_arrow_left" color="white" size={20} /> */}
        <CustomIcons.Ionicons
          name='chevron-back-sharp'
          color={colors.lightBlack}
          size={normalize(20)}
        />
      </TouchableOpacity>
    )
  }

  const onBid = async () => {
    const productId = route.params?.productId
    const uid = getUserId()

    setIsLoading(true)
    try {
      const userDetails = await userFunctions.getUserInfo(uid)
      const auctionData = AuctionModel(
        biddingPrice,
        uid,
        productId,
        userDetails.userData.userName,
        null,
        userDetails.userData.fullName
      )
      await PromiseModule.storeData('Auction', auctionData)
    } catch (error) {
      console.log(error)
    } finally {
      toggleMenu()
      setIsLoading(false)
    }
  }

  const renderItem = ({ item, index }) => {
    return <AuctionItem item={item} />
  }
  const modalComponent = () => {
    return (
      <ModalComponent modalVisible={isModalOpen}>
        <View
          style={{
            backgroundColor: theme.backgroundColor,
            width: '90%',
            // height: '70%',
            borderRadius: normalize(20),
            padding: normalize(15)
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <Text
              style={{
                fontSize: normalize(25),
                fontFamily: getFontFamily(),
                color: theme.fontColor,
                fontWeight: '600'
              }}
            >
              {/* Bid */}
            </Text>
            <TouchableOpacity
              style={{
                height: normalize(25),
                width: normalize(25),
                borderRadius: normalize(20),
                borderColor: colors.lightBlack,
                borderWidth: 1,
                justifyContent: 'center',
                alignItems: 'center'
              }}
              onPress={toggleMenu}
            >
              <CustomIcons.Entypo
                name='cross'
                color={colors.lightBlack}
                size={normalize(20)}
              />
            </TouchableOpacity>
          </View>

          <Text
            style={{
              fontSize: normalize(15),
              color: theme.fontColor,
              opacity: 0.8,
              textAlign: 'center',
              marginVertical: normalize(10)
            }}
          >
            Current Highest Bidding:
          </Text>

          <Text
            style={{
              fontSize: normalize(35),
              color: theme.fontColor,
              opacity: 0.8,
              textAlign: 'center',
              fontWeight: '900'
            }}
          >
            Tk {highestBiddingPrice}
          </Text>
          <Text
            style={{
              fontSize: normalize(15),
              color: theme.fontColor,
              opacity: 0.8,
              textAlign: 'center',
              marginTop: normalize(20),
              marginBottom: normalize(10)
            }}
          >
            Current Highest Bidding:
          </Text>
          <View
            style={{
              width: '80%',
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'center',
              //   justifyContent: 'center',
              marginBottom: normalize(20),
              alignSelf: 'center'
              //   backgroundColor: 'red'
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: theme.primaryColor,
                height: normalize(30),
                width: normalize(30),
                borderRadius: normalize(50),
                justifyContent: 'center',
                alignItems: 'center'
              }}
              onPress={() => setBiddingPrice(parseFloat(biddingPrice) + 1)}
            >
              <CustomIcons.Entypo
                name='plus'
                color='white'
                size={normalize(25)}
              />
            </TouchableOpacity>

            <TextInput
              //   placeholder={placeholder}
              style={{
                // height: normalize(45),
                width: normalize(140),
                alignSelf: 'center',
                color: 'black',
                opacity: 1,
                textAlign: 'center',
                fontFamily: getFontFamily(),
                borderColor: colors.lightBlack,
                borderWidth: 0.6,
                fontSize: normalize(16)
              }}
              keyboardType='number-pad'
              value={biddingPrice.toString()}
              onChangeText={text => setBiddingPrice(text)}
            />
            <TouchableOpacity
              style={{
                backgroundColor: theme.primaryColor,
                height: normalize(30),
                width: normalize(30),
                borderRadius: normalize(50),
                justifyContent: 'center',
                alignItems: 'center',
                opacity:
                  parseFloat(biddingPrice) <= highestBiddingPrice + 1 ? 0.5 : 1
              }}
              onPress={
                parseFloat(biddingPrice) <= highestBiddingPrice + 1
                  ? null
                  : () => setBiddingPrice(parseFloat(biddingPrice) - 1)
              }
            >
              <CustomIcons.Entypo
                name='minus'
                color='white'
                size={normalize(25)}
              />
            </TouchableOpacity>
          </View>
          <CustomButton
            title='Bid now'
            filled
            width={'70%'}
            borderRadius={normalize(10)}
            onPress={onBid}
            customStyle={{ alignSelf: 'center' }}
            isLoading={isLoading}
          />
        </View>
      </ModalComponent>
    )
  }
  const FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '100%',
          backgroundColor: colors.black,
          opacity: 0.2
        }}
      />
    )
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.backgroundColor }}>
      <CommonHeader title='Auction' LeftIcon={LeftIconHeader()} />

      <FlatList
        data={auctionList}
        renderItem={renderItem}
        keyExtractor={(item, index) => item.id}
        ItemSeparatorComponent={FlatListItemSeparator}
        ListHeaderComponent={() => {
          return (
            <>
              <View
                style={{
                  flexDirection: 'row',
                  margin: normalize(10),
                  justifyContent: 'space-between'
                }}
              >
                <Text
                  style={{ fontSize: normalize(15), color: theme.fontColor }}
                >
                  Time Left:
                </Text>
                <Text style={{ fontSize: normalize(15), color: colors.red }}>
                  3 hr 25 min
                </Text>
              </View>
              <Text
                style={{
                  fontSize: normalize(15),
                  textAlign: 'center',
                  fontFamily: getFontFamily(),
                  color: theme.fontColor
                }}
              >
                Highest Bid
              </Text>
              <Text
                style={{
                  fontSize: normalize(45),
                  textAlign: 'center',
                  fontFamily: getFontFamily(),
                  color: theme.primaryColor,
                  fontWeight: '700'
                }}
              >
                {highestBiddingPrice}{' '}
                <Text
                  style={{ fontSize: normalize(15), color: theme.primaryColor }}
                >
                  tk
                </Text>
              </Text>
            </>
          )
        }}
      />
      <TouchableOpacity
        style={[
          {
            position: 'absolute',
            height: normalize(40),
            width: normalize(40),
            borderRadius: normalize(20),
            backgroundColor: theme.primaryColor,
            bottom: 10,
            right: 10,
            justifyContent: 'center',
            alignItems: 'center'
          },
          shadow
        ]}
        onPress={toggleMenu}
      >
        <CustomIcons.FontAwesome5
          name='hammer'
          color={colors.white}
          size={normalize(15)}
        />
      </TouchableOpacity>
      {modalComponent()}
    </SafeAreaView>
  )
}
