/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react'
import { View, Text, TouchableHighlight, Image } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { colors } from '../../configs/colors'
import { convertDateToTime } from '../../utility/utils'

export default class ListItem extends Component {
  render () {
    const { item, navigation, uid } = this.props

    return (
      <>
        <TouchableHighlight
          style={{
            flexDirection: 'row',
            width: '100%',
            paddingVertical: 15,
            // backgroundColor: colors.grayishWhite
          }}
          activeOpacity={0.6}
          underlayColor={colors.grayishWhite}
          onPress={() =>
            navigation.push('MessageThread', {
              item: item,
              uid: uid
            })
          }
        >
          <>
            <View
              style={{
                width: '13%',
                justifyContent: 'center',
                alignItems: 'center',
                marginHorizontal: 10
              }}
            >
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
                <Ionicons
                  name='person-circle'
                  size={50}
                  color={colors.gray}
                  style={{}}
                />
              )}
            </View>

            <View
              style={{
                width: '50%',
                justifyContent: 'center'
              }}
            >
              <Text style={{ fontSize: 18, fontWeight: '500' }}>
                {item.name}
              </Text>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                {item.send && (
                  <Ionicons
                    name='checkmark-done'
                    size={16}
                    color={item.unread > 0 ? colors.gray : colors.iconSendColor}
                  />
                )}
                <Text style={{ color: colors.gray }} numberOfLines={1}>
                  {item.last_massage}
                </Text>
              </View>
            </View>

            <View
              style={{
                width: '30%',
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'center'
              }}
            >
              <View
                style={{
                  width: '80%',
                  backgroundColor: 'transparent',
                  marginRight: 5
                }}
              >
                <Text
                  style={{
                    textAlign: 'right',
                    marginVertical: 5,
                    color: colors.primaryColor
                  }}
                >
                  {convertDateToTime(item.dateTime)}
                </Text>

                {!item.send && item.unread > 0 && (
                  <View
                    style={{
                      backgroundColor: colors.lightBlue,
                      height: 18,
                      borderRadius: 50,
                      width: '20%',
                      alignItems: 'center',
                      marginLeft: '80%'
                    }}
                  >
                    <Text
                      style={{
                        color: colors.textColorWhite,
                        textAlign: 'right',
                        fontSize: 12
                      }}
                    >
                      {item.unread}
                    </Text>
                  </View>
                )}
              </View>
            </View>
          </>
        </TouchableHighlight>
        {/* <View
          style={{
            borderBottomWidth: 0.5,
            borderBottomColor: 'black',
            width: '90%',
            justifyContent: 'center',
            alignSelf: 'center',
          }}
        /> */}
      </>
    )
  }
}
