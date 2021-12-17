import React, {Component} from 'react';
import {Text, TextInput, View} from 'react-native';
import {colors} from '../configs/colors';
import {normalize, shadow} from '../styles/utilityStyle';
import CustomIcons from './CustomIcons';

export default function CustomSearchComponent({placeHolder}) {
  return (
    <View
      style={{
        width: '90%',
        backgroundColor: colors.white,
        flexDirection: 'row',
        height: normalize(40),
        borderRadius: normalize(20),
        //   justifyContent: 'center',
        alignSelf: 'center',
        paddingHorizontal: normalize(10),
        alignItems: 'center',
        ...shadow,
      }}>
      <CustomIcons.Feather
        name="search"
        color={colors.lightGray}
        size={normalize(20)}
        style={{width: '10%'}}
      />
      <TextInput
        placeholder={placeHolder}
        style={{width: '90%', fontSize: normalize(12)}}
      />
    </View>
  );
}
