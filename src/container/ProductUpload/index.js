import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {colors, theme} from '../../configs/colors';
import CustomHeader from '../../components/CommonHeader';
import CustomIcons from '../../components/CustomIcons';
import {normalize} from '../../styles/utilityStyle';
import ImagePlaceHolders from './ImagePlaceHolders';
export default function index({navigation}) {
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
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: theme.backgroundColor}}>
      <CustomHeader title="Seller" LeftIcon={LeftIconHeader()} />
      <ImagePlaceHolders />
    </SafeAreaView>
  );
}
