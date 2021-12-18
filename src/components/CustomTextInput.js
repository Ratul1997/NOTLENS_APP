import React, {Component} from 'react';
import {Text, View, TextInput} from 'react-native';
import {theme} from '../configs/colors';
import {getFontFamily, normalize} from '../styles/utilityStyle';
export default function CustomTextInput({
  Icon,
  title,
  placeholder,
  iconName,
  onChangeText,
  size,
  securedText,
  value,
  numberOfLines,
  multiline,
  disabled,
  iconOnPress,
  leftIcon,
}) {
  return (
    <View style={{alignSelf: 'center', width: '90%', marginVertical: 1}}>
      {title && (
        <Text
          style={{
            color: theme.fontColor,
            marginVertical: normalize(5),
            fontFamily: getFontFamily(),
          }}>
          {title}
        </Text>
      )}
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: 'white',
          alignItems: 'center',
          width: '100%',
          paddingHorizontal: normalize(5),
          justifyContent: 'space-between',
          borderRadius: normalize(5),
        }}>
        {leftIcon && Icon && (
          <Icon
            name={iconName}
            color="gray"
            size={size}
            style={{width: '6%'}}
            onPress={iconOnPress}
          />
        )}
        <TextInput
          placeholder={placeholder}
          style={{
            height: multiline ? normalize(100) : normalize(50),
            width: '94%',
            alignSelf: 'center',
            color: 'black',
            opacity: 1,
            textAlignVertical: multiline ? 'top' : 'center',
            fontFamily: getFontFamily(),
          }}
          numberOfLines={numberOfLines ?? 1}
          onChangeText={onChangeText}
          secureTextEntry={securedText}
          value={value}
          multiline={multiline}
          editable={disabled}
        />
        {!leftIcon && Icon && (
          <Icon
            name={iconName}
            color="gray"
            size={size}
            style={{width: '6%'}}
            onPress={iconOnPress}
          />
        )}
      </View>
    </View>
  );
}
