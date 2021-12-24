import React, {useState, useContext} from 'react';
import {View, Text, StyleSheet, TextInput, ImageBackground} from 'react-native';
import RoundButton from '../../components/buttons/RoundButton';
import globalStyle from './styles';
import {AuthContext} from '../../contexts/AuthProvider';
import { theme } from '../../configs/colors';
const Login = ({navigation}) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const {login} = useContext(AuthContext);
  const onSubmit = () => {
    if (login(userName, password)) {
      return navigation.navigate('HomeNav');
    }
  };
  return (
    <View style={globalStyle.root}>
      <View style={globalStyle.titleContainer}>
        <Text style={globalStyle.title}>Log In</Text>
        <Text style={globalStyle.subTitle}>Wellcome Back</Text>
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
        <Text
          style={[
            globalStyle.suggestion,
            {textAlign: 'right', marginVertical: 10},
          ]}>
          Forget Password?
        </Text>
        <RoundButton title={'Log In'} onPress={onSubmit} />
        <Text style={[globalStyle.suggestion, {}]}>
          Don't have an account?
          <Text style={{fontWeight: 'bold',color:theme.primaryColor}}>Sign In</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
 
});
export default Login;
