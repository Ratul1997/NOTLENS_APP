import React, {useEffect, useState} from 'react';
import {View, Text, Pressable} from 'react-native';
import {Badge} from 'react-native-elements';
import CustomIcons from '../../components/CustomIcons';
import CustomTextInput from '../../components/CustomTextInput';
import {colors, theme} from '../../configs/colors';
import {getFontFamily, normalize} from '../../styles/utilityStyle';
import {findInArray, isStringEmpty} from '../../utility/utils';

export default function ProductTags({productTags, setProductTags}) {
  const [text, setText] = useState('');
  const onTagSubmit = () => {
    if (isStringEmpty(text)) return;
    productTags.push(text.trim());
    setProductTags([...productTags]);
    setText('');
  };

  const onRemoveTag = badgeItem => {
    console.log(badgeItem);
    const index = findInArray(productTags, badgeItem);
    console.log(index);
    productTags.splice(index, 1);
    setProductTags([...productTags]);
  };
  const renderBadges = () => {
    return (
      <View
        style={{
          width: '90%',
          flexDirection: 'row',
          //   justifyContent: 'space-between',
          flexWrap: 'wrap',
          alignSelf: 'center',
        }}>
        {productTags.map((badgeItem, index) => {
          return (
            <Pressable
              key={index}
              style={{
                flexDirection: 'row',
                backgroundColor: colors.white,
                // width: normalize(100),
                margin: normalize(3),
                padding: normalize(10),
                borderRadius: normalize(10),
                borderWidth: 0.7,
                borderColor: colors.lightGray,
              }}
              onPress={() => onRemoveTag(badgeItem)}>
              <Text style={{fontSize: normalize(12), color: colors.lightBlack}}>
                {badgeItem}
              </Text>
            </Pressable>
          );
        })}
      </View>
    );
  };
  const handleKeyPress = e => {
    if (e.nativeEvent.key === ' ') {
      console.log('ok');
      onTagSubmit();
    }
  };
  return (
    <View style={{}}>
      <Text
        style={{
          color: theme.fontColor,
          fontSize: normalize(15),
          fontFamily: getFontFamily(),
          marginHorizontal: normalize(18),
          marginVertical: normalize(10),
        }}>
        Tags
      </Text>
      {renderBadges()}
      <CustomTextInput
        placeholder={'Write Tags'}
        borderRadius={normalize(6)}
        onChangeText={input => setText(input)}
        value={text}
        leftIcon={false}
        iconName="checkcircle"
        Icon={CustomIcons.AntDesign}
        size={normalize(15)}
        iconColor={colors.green}
        iconOnPress={onTagSubmit}
        onKeyPress={handleKeyPress}
      />
    </View>
  );
}
