import React, { useState, useEffect } from 'react'
import { Text, View, ImageBackground, StyleSheet } from 'react-native'
import { theme, colors } from '../../configs/colors'
import image from '../../assets/images/6.jpg'
import { normalize } from '../../styles/utilityStyle'
import UserImageBlock from './UserImageBlock'
import { TouchableOpacity } from 'react-native'
import CustomIcons from '../../components/CustomIcons'
import UserOptions from './UserOptions'
import { getUserId } from '../../utility/utils'
import userFunctions from '../../customFunctions/userFunctions'
const index = ({ navigation }) => {
  const [profileDetails, setProfileDetails] = useState({})

  useEffect(() => {
    loadUserInfo()
  }, [])
  const loadUserInfo = async () => {
    const uid = getUserId()
    try {
      const userDetails = await userFunctions.getUserInfo(uid)

      setProfileDetails(userDetails.userData)
    } catch (error) {
      console.log(error)
    }
  }
  const LeftIconHeader = () => {
    return (
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{ justifyContent: 'center' }}
      >
        {/* <CustomIcon name="ic_arrow_left" color="white" size={20} /> */}
        <CustomIcons.Ionicons
          name='chevron-back-sharp'
          color={colors.white}
          size={normalize(20)}
        />
      </TouchableOpacity>
    )
  }
  const RightIconHeader = () => {
    return (
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{ justifyContent: 'flex-end', alignItems: 'flex-end' }}
      >
        {/* <CustomIcon name="ic_arrow_left" color="white" size={20} /> */}
        <CustomIcons.Ionicons
          name='settings-outline'
          color={colors.white}
          size={normalize(22)}
        />
      </TouchableOpacity>
    )
  }

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={image} resizeMode='cover' style={styles.image}>
        <View style={styles.row1}>
          <UserImageBlock
            LeftIconHeader={LeftIconHeader()}
            RightIconHeader={RightIconHeader()}
            profileDetails={profileDetails}
          />
        </View>
        <View style={styles.row2}>
          <UserOptions navigation={navigation} />
        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    flexDirection: 'column'
  },
  row1: {
    flex: 1,
    marginVertical: normalize(10),
    marginHorizontal: normalize(10)
  },
  row2: {
    flex: 2,
    justifyContent: 'center',
    backgroundColor: colors.white,
    borderTopLeftRadius: normalize(20),
    borderTopRightRadius: normalize(20),
    paddingTop: normalize(1),
    paddingHorizontal: normalize(1)
  }
})
export default index
