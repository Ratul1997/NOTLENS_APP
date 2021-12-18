import React from 'react';
import {View, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {colors, theme} from '../../configs/colors';
import {normalize} from '../../styles/utilityStyle';

export default function ImagePlaceHolders() {
  return (
    <SafeAreaView
      style={{
        backgroundColor: theme.backgroundColor,
        marginHorizontal: normalize(10),
        // paddingHorizontal: normalize(10),
      }}>
      <View style={{flexDirection: 'row'}}>
        <View
          style={{
            width: normalize(70),
            height: normalize(70),
            borderRadius: normalize(8),
            marginHorizontal: normalize(10),
            backgroundColor: colors.lightGray,
          }}></View>
        <View
          style={{
            width: normalize(70),
            height: normalize(70),
            borderRadius: normalize(8),
            marginHorizontal: normalize(10),
            backgroundColor: colors.lightGray,
          }}></View>
        <View
          style={{
            width: normalize(70),
            height: normalize(70),
            borderRadius: normalize(8),
            marginHorizontal: normalize(10),
            backgroundColor: colors.lightGray,
          }}></View>
      </View>
    </SafeAreaView>
  );
}
