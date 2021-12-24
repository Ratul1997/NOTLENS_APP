import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { colors, theme } from '../../../configs/colors'
import messageServices from '../../../customFunctions/messageServices'
import { convertDateToTime } from '../../../utility/utils'

class ReceivedMessage extends React.Component {
  componentDidMount () {
    this.updateUnreadMessage()
  }
  updateUnreadMessage = async () => {
    const { dockKey, data } = this.props
    if (data.messageStatus === 0) {
      await messageServices.updateReadMassage(dockKey, data.id)
      await messageServices.onDecrementUnRead(dockKey)
    }
  }
  render () {
    const { data, lastMessage, name } = this.props
    return (
      <>
        <View
          style={{
            alignItems: 'flex-start'
          }}
        >
          <View
            style={{
              backgroundColor: colors.cyan,
              maxWidth: '80%',
              marginTop: 5,
              marginLeft: 13,
              paddingRight: 5,
              minWidth: '20%',
              borderRadius: 5
            }}
          >
            {lastMessage && (
              <>
                <View style={styles.leftArrow}></View>
                <View style={styles.leftArrowOverlap}></View>
              </>
            )}
            <Text
              style={{
                fontSize: 15,
                paddingTop: 3,
                paddingHorizontal: 10,
                //   backgroundColor: 'red',
                color: colors.white
              }}
            >
              {this.props.name}
            </Text>
            {data.file ? (
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: 5,
                  marginVertical: 5
                }}
              >
                <Image
                  source={{ uri: data.file.path }}
                  style={{
                    width: 200,
                    height: 200,
                    alignSelf: 'center'
                  }}
                  resizeMode='cover'
                  blurRadius={data.messageStatus !== -1 ? 0 : 1}
                />
              </View>
            ) : (
              <Text
                style={{
                  fontSize: 13,
                  paddingTop: 3,
                  paddingBottom: 15,
                  paddingHorizontal: 10,
                  //   backgroundColor: 'red',
                  color: colors.white
                }}
              >
                {data.msg}
              </Text>
            )}

            <Text
              style={{
                fontSize: 10,
                position: 'absolute',
                right: 4,
                bottom: 3,
                color: colors.white
              }}
            >
              {convertDateToTime(data.dateTime)}
            </Text>
          </View>
        </View>
      </>
    )
  }
}
export default ReceivedMessage

const styles = StyleSheet.create({
  /*Arrow head for recevied messages*/
  leftArrow: {
    position: 'absolute',
    backgroundColor: colors.cyan,
    //backgroundColor:"red",
    width: 20,
    height: 25,
    bottom: 0,
    borderBottomRightRadius: 25,
    left: -10
  },

  leftArrowOverlap: {
    position: 'absolute',
    backgroundColor: theme.backgroundColor,
    //backgroundColor:"green",
    width: 20,
    height: 35,
    bottom: -6,
    borderBottomRightRadius: 18,
    left: -20
  }
})
