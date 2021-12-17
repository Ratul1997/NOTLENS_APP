import React from 'react';
import {View, Text, Pressable, TouchableOpacity} from 'react-native';
import {colors, theme} from '../../configs/colors';
import {
  getFontFamily,
  getHeightWidthOfScreen,
  shadow,
} from '../../styles/utilityStyle';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const [HEIGHT, WIDTH] = getHeightWidthOfScreen();
export default function ProductItemComponent() {
  return (
    <Pressable
      style={{
        backgroundColor: colors.white,
        borderRadius: 20,
        width: '45%',
        height: 250,
        marginHorizontal: 10,
        padding: 15,
        marginVertical: 15,
        ...shadow,
      }}>
      <View style={{height: '40%', backgroundColor: 'transparent'}}></View>
      <View
        style={{
          height: '40%',
          backgroundColor: 'transparent',
          justifyContent: 'space-around',
        }}>
        <View>
          <Text
            style={{
              fontFamily: getFontFamily(),
              fontSize: 14,
              color: theme.fontColor,
              opacity: 0.8,
              fontWeight: '600',
              paddingTop: 4,
            }}
            numberOfLines={1}>
            Apple Product Ok
          </Text>
          <Text
            style={{
              fontFamily: getFontFamily(),
              fontSize: 14,
              color: theme.fontColor,
              opacity: 0.8,
              fontWeight: '600',
            }}
            numberOfLines={1}>
            Apple Product Ok
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            // paddingTop: 15,
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: theme.secondaryColor,
              width: '25%',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 5,
            }}>
            <Text
              style={{
                fontFamily: getFontFamily(),
                fontSize: 12,
                color: colors.white,
                paddingVertical: 3,
              }}>
              Bid
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: colors.yellow,
              width: '70%',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 5,
            }}>
            <Text
              style={{
                fontFamily: getFontFamily(),
                fontSize: 12,
                color: colors.white,
                paddingVertical: 3,
                fontWeight: 'bold',
              }}>
              Time Left: 2h 3m
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          backgroundColor: 'transparent',
          height: '20%',
          flexDirection: 'row',
          alignItems: 'center',
          marginVertical: 5,
        }}>
        <View style={{width: '75%'}}>
          <Text
            style={{
              fontSize: 13,
              fontFamily: getFontFamily(),
              color: theme.fontColor,
              opacity: 0.6,
            }}>
            Tk{' '}
            <Text
              style={{
                fontSize: 25,
                fontFamily: getFontFamily(),
                color: colors.black,
              }}>
              350.00
            </Text>
          </Text>
        </View>
        <View style={{width: '25%', backgroundColor: 'transparent'}}>
          <TouchableOpacity
            style={{
              borderColor: colors.blue,
              borderWidth: 1,
              height: 30,
              width: 30,
              borderRadius: 50,
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'flex-end',
            }}>
            <FontAwesome
              color={colors.blue}
              size={13}
              style={{padding: 4}}
              name="money"
            />
          </TouchableOpacity>
        </View>
      </View>
    </Pressable>
  );
}
