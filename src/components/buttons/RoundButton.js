import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {normalize, shadow} from '../../styles/utilityStyle';
import { theme,colors } from '../../configs/colors';
import { getFontFamily } from '../../styles/utilityStyle';
const RoundButton = ({title, onPress}) => {
  return (
    <View>
      <TouchableOpacity style={[styles.buttons, shadow]} onPress={onPress}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttons: {
    backgroundColor: colors.cyan,
    color: 'white',
    height: 45,
    marginHorizontal: '10%',
    marginVertical: 10,
    alignItems: 'center',
    width: '80%',
    borderWidth: 2,
    borderColor: colors.cyan,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    paddingTop: 5,
    fontFamily:getFontFamily()
  },
});

export default RoundButton;
