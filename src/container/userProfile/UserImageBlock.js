import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import CustomeProfileImage from '../../components/CustomeProfileImage'
import CommonHeader from '../../components/CommonHeader'
import userImg from '../../assets/images/7.png'
import { normalize } from '../../styles/utilityStyle'
import { theme, colors } from '../../configs/colors'
import CustomButton from '../../components/CustomButton'

const UserImageBlock = ({
  LeftIconHeader,
  RightIconHeader,
  profileDetails
}) => {
  return (
    <View>
      <CommonHeader
        title={'Profile'}
        LeftIcon={LeftIconHeader}
        customBackgroundColor={'rgba(52, 52, 52, 0.01)'}
        fontColor={colors.white}
        showRightIcon={true}
        RightIcon={RightIconHeader}
      />

      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <CustomeProfileImage
          imgSource={userImg}
          imgWidth={70}
          imgHeight={70}
          imgBorder={true}
        />
      </View>
      <View style={{ marginVertical: normalize(5) }}>
        <Text
          style={{
            fontSize: normalize(13),
            textAlign: 'center',
            fontWeight: 'bold',
            color: colors.white
          }}
        >
          {profileDetails.userName}
        </Text>
        <Text
          style={{
            fontSize: normalize(11),
            textAlign: 'center',
            fontWeight: 'bold',
            color: colors.white
          }}
        >
          {profileDetails.fullName}
        </Text>
      </View>
      {/* <View
        style={{
          alignItems: 'center',
          marginVertical: normalize(15),
        }}>
        <CustomButton
          width={'50%'}
          filled={true}
          title={'Message'}
          fontWeight={'700'}
          onPress={() => navigation.navigate('OtpNav')}
          borderRadius={normalize(50)}
          filled={false}
          color={theme.fontColor}
        />
      </View> */}
    </View>
  )
}

export default UserImageBlock
