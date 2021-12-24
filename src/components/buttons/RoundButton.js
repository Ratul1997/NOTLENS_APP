import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {normalize, shadow} from '../../styles/utilityStyle';
import {theme, colors} from '../../configs/colors';
import {getFontFamily} from '../../styles/utilityStyle';

const RoundButton = ({title, onPress}) => {
  return (
    <View style={styles.root}>
      <TouchableOpacity style={[styles.buttons, shadow]} onPress={onPress}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    marginHorizontal: '5%',
  },
  buttons: {
    backgroundColor: theme.primaryColor,
    color: colors.white,
    height: normalize(35),

    marginVertical: 10,
    alignItems: 'center',
    width: '100%',
    borderWidth: 2,
    borderColor: theme.primaryColor,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    paddingTop: 5,
    fontFamily: getFontFamily(),
  },
});

export default RoundButton;
