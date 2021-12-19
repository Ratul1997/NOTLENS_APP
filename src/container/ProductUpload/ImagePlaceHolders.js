import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {colors, theme} from '../../configs/colors';
import {getFontFamily, normalize} from '../../styles/utilityStyle';

import ImagePicker from 'react-native-image-crop-picker';
import CacheImageComponent from '../../components/imageViewer/CacheImageComponent';
export default function ImagePlaceHolders({images, setImages, navigation}) {
  const onSelectImage = () => {
    ImagePicker.openPicker({
      multiple: true,
    })
      .then(imagesPicked => {
        setImages([...images, ...imagesPicked.map(image => image)]);
      })
      .catch(error => console.log(error));
  };

  const onNavigate = () => {
    navigation.navigate('ImageList', {images: JSON.stringify(images)});
  };
  return (
    <SafeAreaView
      style={{
        backgroundColor: theme.backgroundColor,
        marginHorizontal: normalize(15),
        marginBottom: normalize(10),
        // paddingHorizontal: normalize(10),
      }}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        {Array(4)
          .fill(0)
          .map((item, index) => {
            return (
              <Pressable
                style={{
                  width: normalize(70),
                  height: normalize(70),
                  borderRadius: normalize(8),
                  // marginHorizontal: normalize(10),
                  backgroundColor: colors.lightGray,
                  overflow: 'hidden',
                }}
                key={index}
                onPress={images.length > 4 ? onNavigate : onSelectImage}>
                {images[index] && (
                  <CacheImageComponent
                    url={images[index].path}
                    styles={{
                      width: '100%',
                      height: '100%',
                      borderRadius: normalize(8),
                      // marginHorizontal: normalize(10),
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  />
                )}
                {/* <CacheImageComponent url={} styles={}/> */}
                {images.length > 4 && index === 3 && (
                  <Pressable
                    style={{
                      width: '100%',
                      height: '100%',
                      position: 'absolute',
                      borderRadius: normalize(8),
                      // marginHorizontal: normalize(10),
                      backgroundColor: theme.primaryColor,
                      justifyContent: 'center',
                      alignItems: 'center',
                      opacity: 0.7,
                    }}
                    onPress={onNavigate}>
                    <Text
                      style={{
                        fontSize: normalize(15),
                        color: colors.white,
                        fontFamily: getFontFamily(),
                      }}>
                      View
                    </Text>
                  </Pressable>
                )}
              </Pressable>
            );
          })}
      </View>
    </SafeAreaView>
  );
}
