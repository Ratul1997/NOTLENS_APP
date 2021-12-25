import React from 'react'
import { View, Text } from 'react-native'
import FastImage from 'react-native-fast-image'
import { colors, theme } from '../../configs/colors'
import { getFontFamily, normalize } from '../../styles/utilityStyle'
import {
  convertSecondsToDate,
  formatAMPM,
  formatDate,
  getAvatarTitle
} from '../../utility/utils'

export default function AuctionItem ({ item }) {
  const postedBy = item.postedBy
  const postedOn = convertSecondsToDate(item.postedOn)
  const date = formatDate(postedOn)
  const time = formatAMPM(postedOn)
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10,
        marginVertical: 10,
        alignItems: 'center'
      }}
    >
      <View
        style={{ width: '70%', flexDirection: 'row', alignItems: 'center' }}
      >
        <View
          style={{
            height: 40,
            width: 40,
            borderRadius: 40,
            backgroundColor: colors.grayishWhite,
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          {postedBy.photoUrl ? (
            <FastImage
              style={{
                width: 40,
                height: 40,
                borderRadius: 20
              }}
              source={{
                uri: postedBy.photoUrl,
                priority: FastImage.priority.normal,
                cache: FastImage.cacheControl.immutable
              }}
              resizeMode={FastImage.resizeMode.cover}
            />
          ) : (
            <Text
              style={{
                color: 'black',
                fontSize: 15,
                fontFamily: getFontFamily(),
                textAlign: 'center'
              }}
            >
              {postedBy.fullName
                ? getAvatarTitle(postedBy.fullName)
                : 'JOHN Denvar'}
            </Text>
          )}
        </View>
        <View style={{}}>
          <Text
            style={{
              color: theme.fontColor,
              fontSize: 17,
              fontFamily: getFontFamily(),
              marginHorizontal: 10,
              textAlign: 'center'
            }}
            numberOfLines={1}
          >
            {postedBy.fullName ?? 'JOHN DENVER'}
          </Text>
        </View>
      </View>
      <View style={{ width: '30%' }}>
        <Text
          style={{
            fontSize: normalize(20),
            color: theme.fontColor,
            fontFamily: getFontFamily(),
            textAlign: 'right'
          }}
        >
          {item.price} tk
        </Text>
      </View>
    </View>
  )
}
