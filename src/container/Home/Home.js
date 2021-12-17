import React, {Component, useState} from 'react';
import {Pressable, Text, TouchableOpacity, TouchableWithoutFeedback, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomSearchComponent from '../../components/CustomSearchComponent';
import ProductItemComponent from '../../components/product/ProductItemComponent';
import {colors, theme} from '../../configs/colors';
import {homeTabCategories} from '../../constants/customData/HomeTab';
import {getFontFamily, normalize} from '../../styles/utilityStyle';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState(1);
  const renderOptions = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
          // justifyContent: 'center',
          alignSelf: 'center',
          paddingHorizontal: normalize(20),
          borderBottomColor: colors.gray,
          borderBottomWidth: 0.3,
          marginVertical: normalize(10),
        }}>
        {homeTabCategories.map((category, index) => {
          return (
            <Pressable
              style={{
                justifyContent: 'center',
                alignItems: 'center',

                height: normalize(35),
                width: '25%',
                borderBottomColor:
                  selectedCategory === index
                    ? theme.primaryColor
                    : 'transparent',
                borderBottomWidth: selectedCategory === index ? 1 : 0,
              }}
              key={index}
              onPress={() => setSelectedCategory(index)}>
              <Text
                style={{
                  color: theme.fontColor,
                  fontSize: normalize(11),
                  textAlign: 'center',
                  fontWeight: 'bold',
                  fontFamily: getFontFamily(),
                }}>
                {category.title}
              </Text>
            </Pressable>
          );
        })}
      </View>
    );
  };
  return (
    <SafeAreaView
      style={{
        backgroundColor: theme.backgroundColor,
        flex: 1,
        paddingTop: normalize(20),
      }}>
      <CustomSearchComponent placeHolder="Search for anything" />
      {renderOptions()}
      <View style={{flexDirection: 'row', paddingHorizontal: 10}}>
        <ProductItemComponent />
        <ProductItemComponent />
      </View>
      <View style={{flexDirection: 'row', paddingHorizontal: 10}}>
        <ProductItemComponent />
        <ProductItemComponent />
      </View>
      <View style={{flexDirection: 'row', paddingHorizontal: 10}}>
        <ProductItemComponent />
        <ProductItemComponent />
      </View>
    </SafeAreaView>
  );
}
