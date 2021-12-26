import React, { useState } from 'react'
import { Button, TextInput, View, Text, Image, StyleSheet } from 'react-native'
import auth from '@react-native-firebase/auth'
import image from '../../assets/images/4.jpg'
import bdFlag from '../../assets/images/bd.png'
import globalStyle from './styles'
import RoundButton from '../../components/buttons/RoundButton'
import CustomButton from '../../components/CustomButton'
import { theme, colors } from '../../configs/colors'
import { normalize, shadow } from '../../styles/utilityStyle'

const mobileAuth = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState(null)
  const validatePhoneNumber = phone => {
    var regexp = /^\+[0-9]?()[0-9](\s|\S)(\d[0-9]{8,16})$/
    return regexp.test(phone)
  }

  const handleSendCode = () => {
    // Request to send OTP
    console.log(phoneNumber)
    const phoneNew = '+880' + phoneNumber
    console.log(phoneNew)
    if (validatePhoneNumber(phoneNew)) {
      navigation.navigate('OtpNav', {
        phoneNumber: phoneNew
      })
    } else {
      alert('Invalid Phone Number')
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
          <Text style={globalStyle.title}>Your Phone Number</Text>
          <Text style={globalStyle.subTitle}>
            We will verify if you have registered account with this phonenumber.
          </Text>
        </View>
        <View style={[styles.InputSection]}>
          <View style={[styles.flag, shadow]}>
            <Image
              source={bdFlag}
              style={{
                width: normalize(23),
                height: normalize(23),
                borderRadius: 50
              }}
            />
          </View>
          <Text
            style={{ paddingHorizontal: 2, fontSize: 17, fontWeight: 'bold' }}
          >
            +880 |{' '}
          </Text>
          <TextInput
            style={styles.input}
            placeholder='01334242'
            keyboardType='numeric'
            underlineColorAndroid='transparent'
            // onChangeText={text => setPhoneNumber(text)}
            onChangeText={text => setPhoneNumber(text)}
          />
        </View>

        <View
          style={{
            alignItems: 'center',
            marginVertical: normalize(15)
          }}
        >
          <CustomButton
            width={'90%'}
            filled={true}
            title={'Next'}
            fontWeight={'700'}
            onPress={handleSendCode}
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
  flag: {
    paddingHorizontal: normalize(2),
    borderWidth: normalize(1),
    borderRadius: normalize(50),
    borderColor: colors.white,
    backgroundColor: colors.white
  },
  input: {
    flex: 1,
    paddingTop: normalize(8),
    paddingRight: normalize(8),
    paddingBottom: normalize(8),
    paddingLeft: normalize(5),
    fontSize: normalize(15),
    color: theme.fontColor
  }
})
export default mobileAuth
