import React, {Component} from 'react';
import {Text, View, Pressable} from 'react-native';
import {theme} from '../configs/colors';
import {getFontFamily, normalize} from '../styles/utilityStyle';

export default function CommonHeader({
  LeftIcon,
  RightIcon,
  title,
  alignLeft,
  customBackgroundColor,
  leftAction,
  showRightIcon,
  fontColor,
}) {
  return (
    <View
      style={{
        backgroundColor: customBackgroundColor ?? theme.backgroundColor,
        height: normalize(45),
        flexDirection: 'row',
        paddingHorizontal: normalize(10),
        marginBottom: normalize(7),
        alignItems: 'center',
      }}>
      <Pressable
        onPress={() => {
          leftAction?.();
        }}
        style={{
          width: '10%',
          justifyContent: 'center',
        }}>
        {LeftIcon}
      </Pressable>
      <View
        style={{
          width: '80%',
          backgroundColor: 'transparent',
          justifyContent: 'center',
          alignItems: alignLeft ? 'flex-start' : 'center',
        }}>
        <Text
          style={{
            color: fontColor ? fontColor : theme.fontColor,
            fontSize: normalize(18),
            fontFamily: getFontFamily(),
            fontWeight: 'bold',
            textAlign: 'center',
            opacity: 0.8,
          }}>
          {title}
        </Text>
      </View>
      {/* {showRightIcon && ( */}
      <View
        style={{
          width: '10%',
          // backgroundColor: 'blue',
          justifyContent: 'center',
          // alignItems: 'flex-end',
        }}>
        <RightIcon /> 
        {/* Work as a tag  */}
        {/* {RightIcon} */} 
        {/* but not work as variable why? */}
      </View>
      {/* // )} */}
    </View>
  );
}
