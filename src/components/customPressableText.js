import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {colors, theme} from '../configs/colors';
import {getFontFamily, normalize, shadow} from '../styles/utilityStyle';

export default class CustomPressableText extends Component {
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
      leftIcon,
      Icon,
      iconName,
      iconColor,
      iconSize,
      iconOnPress,
    } = this.props;
    const borders = bordered
      ? {
          borderColor: colors.lightGray,
          borderBottomWidth: borderWidth ?? 1,
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
          flexDirection: 'row',
          width: width ?? '48%',
          borderRadius: borderRadius ?? normalize(20),
          padding: padding ?? normalize(8),
          marginVertical: normalize(2),
          //   justifyContent: 'space-between',
          alignItems: 'center',
          ...borders,
          ...backgroundColors,
        }}
        onPress={onPress}>
        {leftIcon && Icon && (
          <Icon
            name={iconName}
            color={iconColor ?? 'gray'}
            size={iconSize}
            style={{
             
              width: '10%',
              // paddingHorizontal: normalize(1),
              // fontSize: normalize(17),
            }}
            onPress={iconOnPress}
          />
        )}
        <Text
          style={{
            width: '90%',
            color: color ? color : theme.fontColor,
            fontSize: fontSize ?? normalize(14),
            fontFamily: getFontFamily(),
            fontWeight: fontWeight ?? '500',
            paddingHorizontal: normalize(1),
          }}>
          {title}
        </Text>
        {!leftIcon && Icon && (
          <Icon
            name={iconName}
            color={iconColor ?? 'gray'}
            size={iconSize}
            style={{width: '10%'}}
            onPress={iconOnPress}
          />
        )}
      </TouchableOpacity>
    );
  }
}
