import React from 'react'
import { View, StyleSheet } from 'react-native'
import CustomPressableText from '../../components/customPressableText'
import CustomIcons from '../../components/CustomIcons'
import { colors } from '../../configs/colors'
import { normalize } from '../../styles/utilityStyle'
import firestore from '@react-native-firebase/firestore'
import auth from '@react-native-firebase/auth'
const UserOptions = ({ navigation }) => {
  return (
    <View>
      <View style={styles.content}>
        <CustomPressableText
          width={'90%'}
          filled={false}
          title={'Update Auction'}
          fontWeight={'700'}
          //   bordered={true}
          borderRadius={1}
          Icon={CustomIcons.FontAwesome5}
          leftIcon={true}
          iconName={'plus'}
          iconColor={colors.lime}
          iconSize={20}
          // onPress={() => navigation.navigate('OtpNav')}
        />
      </View>
      <View style={styles.content}>
        <CustomPressableText
          width={'90%'}
          filled={false}
          title={'Track Auction'}
          fontWeight={'700'}
          bordered={false}
          borderRadius={1}
          Icon={CustomIcons.FontAwesome5}
          leftIcon={true}
          iconName={'thumbtack'}
          iconColor={colors.red}
          iconSize={20}
          // onPress={() => navigation.navigate('OtpNav')}
        />
      </View>
      <View style={styles.content}>
        <CustomPressableText
          width={'90%'}
          filled={false}
          title={'Selling Items'}
          fontWeight={'700'}
          bordered={false}
          borderRadius={1}
          Icon={CustomIcons.FontAwesome5}
          leftIcon={true}
          iconName={'clipboard-list'}
          iconColor={colors.green}
          iconSize={20}
          // onPress={() => navigation.navigate('OtpNav')}
        />
      </View>

      <View style={styles.content}>
        <CustomPressableText
          width={'90%'}
          filled={false}
          title={'Withdraw Money'}
          fontWeight={'700'}
          bordered={false}
          borderRadius={1}
          Icon={CustomIcons.FontAwesome5}
          leftIcon={true}
          iconName={'dollar-sign'}
          iconColor={colors.orange}
          iconSize={20}
          // onPress={() => navigation.navigate('OtpNav')}
        />
      </View>
      <View style={styles.content}>
        <CustomPressableText
          width={'90%'}
          filled={false}
          title={'Help'}
          fontWeight={'700'}
          bordered={false}
          borderRadius={1}
          Icon={CustomIcons.FontAwesome5}
          leftIcon={true}
          iconName={'question-circle'}
          iconColor={colors.yellow}
          iconSize={20}
          // onPress={() => navigation.navigate('OtpNav')}
        />
      </View>
      <View style={styles.content}>
        <CustomPressableText
          width={'90%'}
          filled={false}
          title={'Log Out'}
          fontWeight={'700'}
          bordered={false}
          borderRadius={1}
          Icon={CustomIcons.Ionicons}
          leftIcon={true}
          iconName={'log-out-outline'}
          iconColor={colors.steelBlue}
          iconSize={25}
          onPress={async () => {
            await auth().signOut()
            navigation.reset({
              index: 0,
              routes: [{ name: 'LoginNav' }]
            })
          }}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: normalize(10)
  }
})
export default UserOptions
