import React, { useState, useEffect } from 'react'
import { Button, TextInput, View, Text, Image, StyleSheet } from 'react-native'
import auth from '@react-native-firebase/auth'
import image from '../../assets/images/5.jpg'
import bdFlag from '../../assets/images/bd.png'
import globalStyle from './styles'
import CustomButton from '../../components/CustomButton'

import { theme, colors } from '../../configs/colors'
import { normalize, shadow } from '../../styles/utilityStyle'

const mobileAuth = ({ navigation, route }) => {
  const [otpCoder, setOtpCode] = useState('')
  const [confirmResult, setConfirm] = useState(null)
  const phoneNumber = route.params?.phoneNumber

  useEffect(() => {
    handleSendCode()
  }, [])
  const handleSendCode = () => {
    auth()
      .signInWithPhoneNumber(phoneNumber)
      .then(confirmResult => {
        console.log(confirmResult)
        setConfirm(confirmResult)
      })
      .catch(error => {
        alert(error.message)
        console.log(error)
      })
  }
  const handleVerifyCode = () => {
    if (otpCoder.length == 6) {
      console.log(confirmResult)
      confirmResult
        .confirm(otpCoder)
        .then(user => {
          console.log(user)
          const { isNewUser } = user.additionalUserInfo
          console.log(user.user.uid)
          if (isNewUser === true) {
            navigation.navigate('SignUpNav', {
              uid: user.user.uid,
              phoneNumber: user.user.phoneNumber
            })
          } else {
            navigation.navigate('HomeNav', {
              uid: user.uid
            })
          }
          // alert(`Verified! ${user.uid}`);
        })
        .catch(error => {
          alert(error.message)
          console.log(error)
        })
    } else {
      alert('Please enter a 6 digit OTP code.')
    }
  }
  return (
    <View style={{ backgroundColor: 'white', flex: 1 }}>
      <View
        style={{
          width: '100%',
          height: '50%',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Image style={{ width: '60%', height: '60%' }} source={image} />
      </View>
      <View>
        <View style={{ marginHorizontal: '20%', marginVertical: 5 }}>
          <Text style={globalStyle.title}>Enter Code</Text>
          <Text style={globalStyle.subTitle}>
            {`One OTP Code is send to your phone number ${phoneNumber}.Please enter
            that OTP Code.`}
          </Text>
        </View>
        <View style={[styles.InputSection]}>
          <TextInput
            style={styles.input}
            placeholder='OTP CODE'
            underlineColorAndroid='transparent'
            onChangeText={text => setOtpCode(text)}
          />
        </View>
        <View
          style={{
            alignItems: 'center',
            marginVertical: normalize(5)
          }}
        >
          <CustomButton
            width={'90%'}
            filled={true}
            title={'Next'}
            fontWeight={'700'}
            onPress={handleVerifyCode}
            borderRadius={normalize(5)}
          />
        </View>
        <View
          style={{
            alignItems: 'center',
            marginVertical: normalize(10)
          }}
        >
          <CustomButton
            width={'90%'}
            filled={true}
            title={'Resend OTP'}
            fontWeight={'700'}
            filled={false}
            color={theme.primaryColor}
            borderColor={false}
            onPress={() => navigation.navigate('OtpNav')}
            borderRadius={normalize(5)}
          />
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  InputSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    backgroundColor: colors.whiteSmoke,
    borderColor: colors.lightBlack,
    borderRadius: normalize(5),
    marginHorizontal: '5%',
    paddingHorizontal: '2%',
    marginVertical: '3%'
  },

  input: {
    flex: 1,
    paddingTop: normalize(8),
    paddingRight: normalize(8),
    paddingBottom: normalize(8),
    paddingLeft: normalize(5),
    fontSize: normalize(13),
    color: theme.fontColor
  }
})
export default mobileAuth
