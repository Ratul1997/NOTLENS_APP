import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {colors, theme} from '../configs/colors';
import {getFontFamily, normalize, shadow} from '../styles/utilityStyle';

export default class CustomButton extends Component {
  render() {
    const {
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
      color,
    } = this.props;
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
          ...shadow,
        }}
        onPress={onPress}>
        <Text
          style={{
            color: color?color:colors.white,
            fontSize: fontSize ?? normalize(15),
            fontFamily: getFontFamily(),
            fontWeight: fontWeight ?? '500',
          }}>
          {title}
        </Text>
      </TouchableOpacity>
    );
  }
}
