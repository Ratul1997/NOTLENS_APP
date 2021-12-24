import React from 'react';
import {View, Text, Button} from 'react-native';
import RoundButton from '../../components/buttons/RoundButton';
import CustomButton from '../../components/CustomButton';
import styles from './style';
import {normalize} from '../../styles/utilityStyle';
const LandingPage = ({navigation}) => {
  const signUpPress = () => {
    console.log('SIgn Up button Press');
  };
  const loginPress = () => {
    console.log('Login button Press');
  };
  return (
    <View style={styles.root}>
      <View style={styles.appName}>
        <Text style={styles.appName}>NOTLENS</Text>
      </View>
      <View>
        <View
          style={{
            alignItems: 'center',
            marginVertical: normalize(8),
          }}>
          <CustomButton
            width={'90%'}
            filled={true}
            title={'Sign Up'}
            fontWeight={'700'}
            onPress={() => navigation.navigate('SignUpNav')}
            borderRadius={normalize(5)}
          />
        </View>
        <View
          style={{
            alignItems: 'center',
            marginVertical: normalize(8),
          }}>
          <CustomButton
            width={'90%'}
            filled={true}
            title={'Log In'}
            fontWeight={'700'}
            onPress={() => navigation.navigate('LoginNav')}
            borderRadius={normalize(5)}
          />
        </View>
      </View>
    </View>
  );
};

export default LandingPage;
