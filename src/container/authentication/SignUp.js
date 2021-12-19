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
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import globalStyle from './styles';
import {AuthContext} from '../../contexts/AuthProvider';
import {
  getFontFamily,
  getHeightWidthOfScreen,
  shadow,
} from '../../globalStyle/utilityStyle';
const SignUp = () => {
  const [nidNumber, setNidNumber] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [userRole, setUserRole] = useState('');
  const [password, setPassword] = useState('');
  const [repeatePassword, setRepeatePassword] = useState('');
  const {signUp} = useContext(AuthContext);

  const onSubmit = async () => {
    await signUp(userName, email, phoneNumber, userRole, nidNumber, password);

    console.log(userName, email, phoneNumber, userRole, password, nidNumber);
    // navigation.navigate('HomeNav')
  };
  return (
    <View style={globalStyle.root}>
      <View style={globalStyle.titleContainer}>
        <View style={globalStyle.topBar}>
          <View>
            <Text>Logo</Text>
          </View>
          {/* <View style={globalStyle.topBarButton}>
            <TouchableOpacity>
              <Text>Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text>Log In</Text>
            </TouchableOpacity>
          </View> */}
        </View>
        <Text style={globalStyle.title}>Sign Up</Text>
        <Text style={globalStyle.subTitle}>Create New Account</Text>
      </View>
      <View style={globalStyle.inputContainer}>
        <View style={globalStyle.inputContent}>
          <Text style={globalStyle.level}>User Name</Text>
          <TextInput
            style={globalStyle.textInput}
            placeholder="nakib57"
            placeholderTextColor="gray"
            onChangeText={setUserName}
            value={userName}
          />
        </View>

        <View style={globalStyle.inputContent}>
          <Text style={globalStyle.level}>Phone Number</Text>
          <TextInput
            style={globalStyle.textInput}
            placeholder="017102004244"
            placeholderTextColor="gray"
            onChangeText={setPhoneNumber}
            value={phoneNumber}
            keyboardType="numeric"
          />
        </View>
        <View style={globalStyle.inputContent}>
          <Text style={globalStyle.level}>Email</Text>
          <TextInput
            style={globalStyle.textInput}
            placeholder="nakib@gmail.com"
            placeholderTextColor="gray"
            onChangeText={setEmail}
            value={email}
          />
        </View>
        <View style={globalStyle.inputContent}>
          <Text style={globalStyle.level}>Nid number or Passport number</Text>
          <TextInput
            style={globalStyle.textInput}
            placeholder="02341231A"
            placeholderTextColor="gray"
            onChangeText={setNidNumber}
            value={nidNumber}
          />
        </View>
        <View style={globalStyle.inputContent}>
          <Text style={globalStyle.level}>User Role</Text>
          <View style={globalStyle.textInput}>
            <Picker
              selectedValue={userRole}
              style={globalStyle.dorpdown}
              onValueChange={(itemValue, itemIndex) => setUserRole(itemValue)}>
              <Picker.Item label="Bidder" value="bidder" />
              <Picker.Item label="Seller" value="seller" />
            </Picker>
          </View>
        </View>
        <View style={globalStyle.inputContent}>
          <Text style={globalStyle.level}>Password</Text>
          <TextInput
            style={globalStyle.textInput}
            secureTextEntry={true}
            placeholder="........."
            placeholderTextColor="gray"
            onChangeText={setPassword}
            value={password}
          />
        </View>
        {/* <View style={globalStyle.inputContent}>
          <Text style={globalStyle.level}>Repeat Password</Text>
          <TextInput
            secureTextEntry={true}
            style={globalStyle.textInput}
            placeholder=".........."
            placeholderTextColor="gray"
            onChangeText={setRepeatePassword}
            value={repeatePassword}
          />
        </View> */}

        <RoundButton title={'Sign Up'} onPress={onSubmit} />
        <Text style={globalStyle.suggestion}>
          Have an Account?{' '}
          <Text style={{fontWeight: 'bold', color: 'red'}}> Log In</Text>{' '}
        </Text>
      </View>
    </View>
  );
};

export default SignUp;
