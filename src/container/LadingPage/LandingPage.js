import React from 'react';
import {View, Text, Button} from 'react-native';
import RoundButton from '../../components/buttons/RoundButton';

import styles from './style';

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
        <RoundButton title={'Sign Up'} onPress={()=>navigation.navigate('SignUpNav')} />

        <RoundButton
          title={'Log In'}
          onPress={() => navigation.navigate('LoginNav')}
        />
      </View>
    </View>
  );
};

export default LandingPage;
