import React, {Component} from 'react';
import {Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';

export default function CacheImageComponent({url, styles}) {
  return (
    <FastImage
      style={styles}
      source={{
        uri: url,
        priority: FastImage.priority.normal,
        cache: FastImage.cacheControl.immutable,
      }}
      resizeMode={FastImage.resizeMode.cover}
    />
  );
}
