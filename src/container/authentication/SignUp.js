import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import RoundButton from '../../components/buttons/RoundButton';
import {SafeAreaView} from 'react-native-safe-area-context';
import {colors, theme} from '../../configs/colors';

import {AuthContext} from '../../contexts/AuthProvider';
import {getFontFamily, normalize} from '../../styles/utilityStyle';
import CustomButton from '../../components/CustomButton';
import CustomHeader from '../../components/CommonHeader';
import CustomIcons from '../../components/CustomIcons';
import CustomTextInput from '../../components/CustomTextInput';
const SignUp = ({navigation}) => {
  const [nidNumber, setNidNumber] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [userRole, setUserRole] = useState('');
  const [password, setPassword] = useState('');
  const [repeatePassword, setRepeatePassword] = useState('');
  const {signUp} = useContext(AuthContext);
  const LeftIconHeader = () => {
    return (
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{justifyContent: 'center'}}>
        {/* <CustomIcon name="ic_arrow_left" color="white" size={20} /> */}
        <CustomIcons.Ionicons
          name="chevron-back-sharp"
          color={colors.lightBlack}
          size={normalize(20)}
        />
      </TouchableOpacity>
    );
  };
  const onSubmit = async () => {
    await signUp(userName, email, phoneNumber, userRole, nidNumber, password);

    console.log(userName, email, phoneNumber, userRole, password, nidNumber);
    // navigation.navigate('HomeNav')
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: theme.backgroundColor}}>
      <CustomHeader
        title="Sign Up"
        LeftIcon={LeftIconHeader()}
        // showRightIcon
        // RightIcon={RightIcon()}
      />
      <View style={{marginHorizontal: '20%', marginTop: normalize(20)}}>
        <Text style={styles.title}>Let's get started</Text>
        <Text style={styles.subTitle}>
          Pleans give your information to continue.
        </Text>
      </View>
      <View style={{flex:1,justifyContent:'center'}}>
        <View style={styles.inputContent}>
          <CustomTextInput
            placeholder={'Username'}
            borderRadius={normalize(6)}
            // onChangeText={input => setText(input)}
            // value={text}
            leftIcon={true}
            iconName="user"
            Icon={CustomIcons.FontAwesome5}
            size={normalize(15)}
            iconColor={colors.green}
            // iconOnPress={onTagSubmit}
            // onKeyPress={handleKeyPress}
          />
        </View>
        <View style={styles.inputContent}>
          <CustomTextInput
            placeholder={'Full Name'}
            borderRadius={normalize(6)}
            // onChangeText={input => setText(input)}
            // value={text}
            leftIcon={true}
            iconName="user"
            Icon={CustomIcons.FontAwesome5}
            size={normalize(15)}
            iconColor={colors.green}
            // iconOnPress={onTagSubmit}
            // onKeyPress={handleKeyPress}
          />
        </View>
        <View style={styles.inputContent}>
          <CustomTextInput
            placeholder={'Email'}
            borderRadius={normalize(6)}
            // onChangeText={input => setText(input)}
            // value={text}
            leftIcon={true}
            iconName="envelope"
            Icon={CustomIcons.FontAwesome5}
            size={normalize(15)}
            iconColor={colors.green}
            // iconOnPress={onTagSubmit}
            // onKeyPress={handleKeyPress}
          />
        </View>
        <View style={styles.inputContent}>
          <CustomTextInput
            placeholder={'Phone Number'}
            borderRadius={normalize(6)}
            // onChangeText={input => setText(input)}
            // value={text}
            leftIcon={true}
            iconName="phone-alt"
            Icon={CustomIcons.FontAwesome5}
            size={normalize(15)}
            iconColor={colors.green}
            keyboardType={'numeric'}
            // iconOnPress={onTagSubmit}
            // onKeyPress={handleKeyPress}
          />
        </View>
        <View style={styles.inputContent}>
          <CustomTextInput
            placeholder={'Nid or Passport Number'}
            borderRadius={normalize(6)}
            // onChangeText={input => setText(input)}
            // value={text}
            leftIcon={true}
            iconName="address-card"
            Icon={CustomIcons.FontAwesome5}
            size={normalize(15)}
            iconColor={colors.green}
            // iconOnPress={onTagSubmit}
            // onKeyPress={handleKeyPress}
          />
        </View>
      </View>
      <View
        style={{
          alignItems: 'center',
          marginVertical: normalize(15),
        }}>
        <CustomButton
          width={'90%'}
          filled={true}
          title={'Submit'}
          fontWeight={'700'}
          // onPress={() => navigation.navigate('OtpNav')}
          borderRadius={normalize(6)}
        />
      </View>
    </SafeAreaView>
  );
};
{
  /* <UserOutlined /> */
}
const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: normalize(16),
    color: colors.black,
  },
  subTitle: {
    textAlign: 'center',
    marginVertical: normalize(10),
    fontSize: normalize(13),
  },
  inputContent: {
    marginVertical: normalize(3),
  },
});
export default SignUp;
