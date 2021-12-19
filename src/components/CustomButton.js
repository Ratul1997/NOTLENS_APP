import React, {Component} from 'react';
import {Text, View, TouchableOpacity, ActivityIndicator} from 'react-native';
import {colors, theme} from '../configs/colors';
import {getFontFamily, normalize} from '../styles/utilityStyle';

export default function CustomButton({
  bordered,
  filled,
  onPress,
  title,
  fontSize,
  fontWeight,
  width,
  padding,
  borderRadius,
  borderWidth,
  isLoading,
}) {
  const borders = bordered
    ? {
        borderColor: colors.lightGray,
        borderWidth: borderWidth ?? 1,
      }
    : {};
  const backgroundColors = filled
    ? {
        backgroundColor: theme.primaryColor,
      }
    : {
        backgroundColor: colors.white,
      };
  return (
    <TouchableOpacity
      style={{
        width: width ?? '48%',
        borderRadius: borderRadius ?? normalize(20),
        padding: padding ?? normalize(8),
        justifyContent: 'center',
        alignItems: 'center',
        ...borders,
        ...backgroundColors,
      }}
      onPress={onPress}>
      {isLoading ? (
        <ActivityIndicator size="small" color={colors.white} />
      ) : (
        <Text
          style={{
            color: colors.white,
            fontSize: fontSize ?? normalize(15),
            fontFamily: getFontFamily(),
            fontWeight: fontWeight ?? '500',
          }}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
}
