import React, { useState } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Platform
} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'

import * as Progress from 'react-native-progress'
import storage from '@react-native-firebase/storage'

import { colors, theme } from '../../../configs/colors'
import { convertDateToTime } from '../../../utility/utils'
import messageServices from '../../../customFunctions/messageServices'
class SendMessage extends React.Component {
  state = {
    transferred: 0,
    uploading: false
    // error: true,
  }
  selectIconColor = type => {
    return type === 1 ? colors.deepBlue : 'gray'
  }
  selectIcon = type => {
    return type === 1 ? 'checkmark-done' : 'checkmark'
  }
  componentDidMount () {
    const { data } = this.props
    {
      data.file && data.messageStatus === -1 && this.uploadFile()
    }
  }

  uploadFile = async () => {
    console.log('here')
    this.setState({ uploading: true })
    const { data, dockKey } = this.props
    const uri = data.file.path
    const fileName =
      new Date().getTime().toString() + uri.split(/['/',]+/).pop()
    const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri
    const task = storage()
      .ref(`images/${fileName}`)
      .putFile(uploadUri)
    task.on('state_changed', snapshot => {
      this.setState({
        transferred:
          Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 10000
      })
    })
    try {
      await task
    } catch (e) {
      console.error(e)
    } finally {
      this.setState({ uploading: false })
      await messageServices.storeFilesInFireStore(
        fileName,
        data,
        dockKey,
        'Send a media'
      )
    }
  }
  render () {
    const { data, lastMessage } = this.props
    const { transferred, uploading } = this.state
    return (
      <>
        <View
          style={{
            alignItems: 'flex-end'
          }}
        >
          <View
            style={{
              backgroundColor: colors.grayishWhite,
              maxWidth: '80%',
              marginTop: 5,
              marginRight: 13,
              paddingRight: 5,
              minWidth: '20%',
              borderRadius: 5
            }}
          >
            {lastMessage && (
              <>
                <View style={styles.rightArrow}></View>
                <View style={styles.rightArrowOverlap}></View>
              </>
            )}

            {data.file ? (
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  margin: 5
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
                  blurRadius={data.messageStatus === -1 ? 1 : 0}
                />
                {uploading && (
                  <Progress.Bar
                    style={{ position: 'absolute', bottom: 0 }}
                    width={200}
                    progress={this.state.transferred}
                    indeterminate={true}
                  />
                )}
              </View>
            ) : (
              <Text
                style={{
                  fontSize: 14,
                  paddingTop: 3,
                  paddingBottom: 17,
                  paddingHorizontal: 10,
                  //   backgroundColor: 'red',
                  color: theme.fontColor
                }}
              >
                {data.msg}
              </Text>
            )}

            <Text
              style={{
                fontSize: 10,
                position: 'absolute',
                right: 18,
                bottom: 3,
                color: theme.fontColor
              }}
            >
              {convertDateToTime(data.dateTime)}
              {/* {calculation.convertTimeToDate(data.time)} */}
            </Text>

            {data.messageStatus === -1 ? (
              <AntDesign
                name='clockcircleo'
                style={{ position: 'absolute', right: 3, bottom: 2 }}
                size={14}
                color={this.selectIconColor(data.messageStatus)}
              />
            ) : (
              <Ionicons
                name='checkmark-done'
                style={{ position: 'absolute', right: 3, bottom: 2 }}
                size={14}
                color={this.selectIconColor(data.messageStatus)}
              />
            )}
          </View>
        </View>
      </>
    )
  }
}
export default SendMessage

const styles = StyleSheet.create({
  rightArrow: {
    position: 'absolute',
    backgroundColor: colors.grayishWhite,
    //backgroundColor:"red",
    width: 20,
    height: 25,
    bottom: 0,
    borderBottomLeftRadius: 25,
    right: -10
  },

  rightArrowOverlap: {
    position: 'absolute',
    backgroundColor: theme.backgroundColor,
    //backgroundColor:"green",
    width: 20,
    height: 35,
    bottom: -6,
    borderBottomLeftRadius: 18,
    right: -20
  }
})
