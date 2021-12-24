import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import CustomIcons from '../../../components/CustomIcons'
import { colors, theme } from '../../../configs/colors'
import { normalize } from '../../../styles/utilityStyle'

export default class Header extends Component {
  render () {
    const { item, onBackPress, onShowPopUp } = this.props
    return (
      <View
        style={{
          backgroundColor: colors.grayishWhite,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 10,
          height: 60,
          borderBottomColor: 'black',
          borderBottomWidth: 0.5
        }}
      >
        <TouchableOpacity
          style={{
            width: '10%',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'flex-start'
          }}
          onPress={onBackPress}
        >
          <CustomIcons.MaterialIcons
            size={20}
            color={theme.primaryColor}
            name='arrow-back-ios'
          />
        </TouchableOpacity>

        <View style={{ width: '90%', flexDirection: 'row' }}>
          {item.avatar_link ? (
            <Image
              source={{ uri: item.avatar_link }}
              style={{
                height: 45,
                width: 45,
                borderRadius: 50
              }}
            ></Image>
          ) : (
            <CustomIcons.Ionicons
              name='person-circle'
              size={50}
              color={colors.gray}
            />
          )}
          <View style={{ marginHorizontal: 8 }}>
            <Text style={{ fontSize: 15, fontWeight: '600' }} numberOfLines={1}>
              {item.name}
            </Text>
            <Text
              style={{ fontSize: 12, color: colors.gray }}
              numberOfLines={1}
            >
              Lorem Ipsum asdasd kas d
            </Text>
          </View>
        </View>

      </View>
    )
  }
}
