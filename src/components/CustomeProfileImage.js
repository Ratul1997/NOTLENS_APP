import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {colors} from '../configs/colors';
import {normalize,shadow} from '../styles/utilityStyle';
const CustomeProfileImage = ({imgSource, imgWidth, imgHeight, imgBorder}) => {
  return (
    <View>
      <Image
        source={imgSource}
        style={{
          width: normalize(imgWidth),
          height: normalize(imgHeight),
          borderRadius: normalize(50),
          borderWidth:imgBorder? normalize(4):null,
          borderColor: colors.white,
        }}
      />
    </View>
  );
};

export default CustomeProfileImage;
