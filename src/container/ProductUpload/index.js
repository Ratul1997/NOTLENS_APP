import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {colors, theme} from '../../configs/colors';
import CustomHeader from '../../components/CommonHeader';
import CustomIcons from '../../components/CustomIcons';
import {getFontFamily, normalize} from '../../styles/utilityStyle';
import ImagePlaceHolders from './ImagePlaceHolders';
import CustomTextInput from '../../components/CustomTextInput';
import ProductTags from './ProductTags';
import CustomButton from '../../components/CustomButton';
export default function index({navigation}) {
  const [images, setImages] = useState([]);
  const LeftIconHeader = () => {
    return (
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{justifyContent: 'center'}}>
        {/* <CustomIcon name="ic_arrow_left" color="white" size={20} /> */}
        <CustomIcons.Ionicons
          name="chevron-back-sharp"
          color={colors.lightBlack}
          size={normalize(20)}
        />
      </TouchableOpacity>
    );
  };
  const RightIcon = () => {
    return (
      <TouchableOpacity
        style={{
          backgroundColor: theme.backgroundColor,
          padding: 10,
          height: normalize(30),
          width: normalize(30),
        }}>
        <Text
          style={{
            fontFamily: getFontFamily(),
            color: colors.black,
            fontSize: normalize(14),
          }}>
          Post
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: theme.backgroundColor}}>
      <CustomHeader
        title="Seller"
        LeftIcon={LeftIconHeader()}
        // showRightIcon
        // RightIcon={RightIcon()}
      />
      <KeyboardAwareScrollView>
        <View>
          <ImagePlaceHolders
            images={images}
            setImages={setImages}
            navigation={navigation}
          />
          <View style={{marginVertical: normalize(8)}}>
            <CustomTextInput
              placeholder={'Product Title'}
              borderRadius={normalize(6)}
              // onChangeText={text => this.onChange(item.key, text)}
              // value={this.state[item.key]}
            />
          </View>
          <View style={{marginVertical: normalize(8)}}>
            <CustomTextInput
              placeholder={'Base Price'}
              borderRadius={normalize(6)}
              keyboardType={'number-pad'}
              // onChangeText={text => this.onChange(item.key, text)}
              // value={this.state[item.key]}
            />
          </View>
          <View style={{marginVertical: normalize(8)}}>
            <CustomTextInput
              placeholder={'Product Details'}
              borderRadius={normalize(6)}
              multiline={true}
              // onChangeText={text => this.onChange(item.key, text)}
              // value={this.state[item.key]}
            />
          </View>
          <ProductTags />
          <View
            style={{
              alignItems: 'center',
              marginVertical: normalize(15),
            }}>
            <CustomButton
              width={'90%'}
              filled={true}
              title={'Post Product'}
              // onPress={this.onFinishLive}
              borderRadius={normalize(10)}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}
