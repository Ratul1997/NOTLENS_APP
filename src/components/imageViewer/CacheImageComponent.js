import React, {Component} from 'react';
import {Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {colors} from '../../configs/colors';

export default function CacheImageComponent({url, styles}) {
  console.log(url, 'url');
  return (
    <FastImage
      style={[styles, {backgroundColor: colors.grayishWhite}]}
      source={{
        uri: url,
        priority: FastImage.priority.normal,
        cache: FastImage.cacheControl.immutable,
      }}
      resizeMode={FastImage.resizeMode.cover}
    />
  );
}
