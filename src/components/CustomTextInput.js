import React, {Component} from 'react';
import {Text, View, TextInput} from 'react-native';
import {colors, theme} from '../configs/colors';
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
  editable,
  iconOnPress,
  leftIcon,
  borderRadius,
  iconColor,
  keyboardType,
  onKeyPress,
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
          borderRadius: normalize(borderRadius),
          borderWidth: 1,
          borderColor: colors.lightGray,
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
            // height: normalize(45),
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
          editable={editable}
          keyboardType={keyboardType ?? 'default'}
          onKeyPress={onKeyPress}
        />
        {!leftIcon && Icon && (
          <Icon
            name={iconName}
            color={iconColor ?? 'gray'}
            size={size}
            style={{width: '6%'}}
            onPress={iconOnPress}
          />
        )}
      </View>
    </View>
  );
}
