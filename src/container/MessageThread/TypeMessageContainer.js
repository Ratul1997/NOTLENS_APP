/* eslint-disable react-native/no-inline-styles */
import React from 'react'
import { View, Text, TouchableOpacity, TextInput } from 'react-native'

import FontAwesome from 'react-native-vector-icons/FontAwesome'

import Ionicons from 'react-native-vector-icons/Ionicons'
import AutoExpandingTextInput from './AutonExpandingTextInput'
import { colors } from '../../configs/colors'
import messageServices from '../../customFunctions/messageServices'

import { buildDocKey, getCurrentTime } from '../../utility/utils'

class TypeMessageContainer extends React.Component {
  state = {
    text: ''
  }
  trimWhiteSpace = str => {
    return str.trim()
  }

  onUploadFireStore = async text => {
    const { item, uid } = this.props
    const dateTime = getCurrentTime()
    const to = item.uid
    const dockKey = item.id
    const { length } = this.props
    console.log(dockKey)
    try {
      {
        length === 0 &&
          (await messageServices.storeFirstMessage(uid, to, dateTime, dockKey))
      }
      await messageServices.storeLastMessage(uid, to, text, dateTime, dockKey)
      await messageServices.sendMessage(uid, text, dateTime, dockKey)

      await messageServices.onIncrementUnRead(dockKey)
    } catch (error) {
      console.log(error,'sd')
    }
  }
  sendMessage = async () => {
    const dateTime = getCurrentTime()
    const { text } = this.state
    this.props.onUpdateMessageList(text, dateTime)
    this.setState({ text: '' })
    this.onUploadFireStore(text)
  }
  render () {
    const { onShowPopUp } = this.props
    return (
      <View
        style={{
          position: 'absolute',
          bottom: 5,
          flexDirection: 'row',
          padding: 5,
          backgroundColor: colors.lightGray
        }}
      >
        <TouchableOpacity
          style={{
            width: '10%',
            alignItems: 'center',
            marginBottom: 6,
            justifyContent: 'flex-end'
          }}
          onPress={onShowPopUp}
        >
          <FontAwesome color={colors.blue} size={25} name='camera' />
        </TouchableOpacity>
        <View
          style={{
            width: '90%',
            backgroundColor: colors.white,
            borderRadius: 15,
            flexDirection: 'row'
          }}
        >
          <AutoExpandingTextInput
            placeholder='Type A Message'
            multiline={true}
            numberOfLines={4}
            onChangeText={text => this.setState({ text: text })}
            value={this.state.text}
          />
          <TouchableOpacity
            style={{
              width: '10%',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            onPress={this.sendMessage}
          >
            <Ionicons color={colors.blue} size={25} name='send-sharp' />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
export default TypeMessageContainer
