import React, { Component } from 'react'
import { Text, View, Linking, Image } from 'react-native'
import Header from './common/Header'
import MessagingContainer from './MessagingContainer'
import TypeMessageContainer from './TypeMessageContainer'
import ImagePicker from 'react-native-image-crop-picker'
import { MessageModel } from '../../model/MessageModel'
import { colors, theme } from '../../configs/colors'
import { getCurrentTime } from '../../utility/utils'
import BottomActionModal from '../../components/BottomActionModal'

const CAMERA_REQUEST = 201
const LIBRARY_REQUEST = 202
const CALL_INTENT_REQUEST = 101

const mediaPopUpList = [
  {
    id: CAMERA_REQUEST,
    title: 'Camera',
    icon: 'camera'
  },
  {
    id: LIBRARY_REQUEST,
    title: 'Photo Library',
    icon: 'image'
  }
]

export default class MessageThread extends Component {
  constructor (props) {
    super(props)
    this.state = {
      popUpList: [],
      messages: [],
      imagePath: null
    }
    this.popUpRef = React.createRef()
    this.messageRef = React.createRef()
  }
  onBackPress = () => {
    this.props.navigation.pop()
  }
  onShowPopUp = () => {
    this.popUpRef.show()
  }
  onClosePopUp = () => {
    this.popUpRef.close()
  }
  onCallClick = () => {
    const title = `Call +01616279018`
    const popUpList = [
      {
        id: CALL_INTENT_REQUEST,
        title: title,
        icon: 'phone',
        color: colors.lightBlue
      }
    ]
    this.setState({ popUpList: popUpList })
    this.onShowPopUp()
  }
  onCameraClick = () => {
    this.setState({ popUpList: mediaPopUpList })
    this.onShowPopUp()
  }

  updateMessageState = messages => {
    this.setState({ messages: messages })
  }

  openCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true
    })
      .then(image => {
        console.log(image)
        this.setState({ imagePath: image.path })
        this.onSelectImageFile(image)
      })
      .catch(error => console.log(error))
      .finally(() => {
        this.onClosePopUp()
      })
  }

  onSelectImageFile = files => {
    const dateTime = getCurrentTime()
    const file = {
      path: files.path,
      size: files.size
    }
    this.onUpdateMessageList(null, dateTime, file)
  }

  openImagePicker = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    })
      .then(image => {
        console.log(image)
        this.setState({ imagePath: image.path })
        this.onSelectImageFile(image)
      })
      .catch(error => console.log(error))
      .finally(() => {
        this.onClosePopUp()
      })
  }

  onUpdateMessageList = (text = null, dateToTime, file = null) => {
    const { uid } = this.props.route.params

    const item = {
      text: text,
      senderId: uid,
      read: -1,
      dateTime: { seconds: dateToTime / 1000 },
      file: file
    }
    const customId = new Date().getTime().toString()
    const textObject = MessageModel(item, customId)
    console.log(textObject)
    const messages = this.state.messages

    messages.unshift(textObject)
    this.updateMessageState(messages)
  }

  openCallIntent = () => {
    let phoneNumber = '01515279018'
    Linking.openURL(`tel:${phoneNumber}`)
  }

  onPressOptions = id => () => {
    switch (id) {
      case CAMERA_REQUEST:
        this.openCamera()
        return
      case LIBRARY_REQUEST:
        this.openImagePicker()
        return
      case CALL_INTENT_REQUEST:
        this.openCallIntent()
        return
    }
  }
  render () {
    const { route } = this.props
    const { item, uid } = route.params
    return (
      <View
        style={{
          backgroundColor: theme.backgroundColor,
          height: '100%',
          width: '100%'
        }}
      >
        <Header
          item={item}
          onBackPress={this.onBackPress}
          onShowPopUp={this.onCallClick}
        />
        {/* {this.state.imagePath && (
          <Image
            style={{height: 100, width: 100}}
            source={{uri: this.state.imagePath}}
          />
        )} */}
        <View style={{ flex: 1 }}>
          <View style={{ height: '94%' }}>
            <MessagingContainer
              ref={target => (this.messageRef = target)}
              name={item.name}
              item={item}
              updateMessageState={this.updateMessageState}
              messages={this.state.messages}
              uid={uid}
            />
          </View>
          <TypeMessageContainer
            onShowPopUp={this.onCameraClick}
            item={item}
            length={this.state.messages.length}
            uid={uid}
            onUpdateMessageList={this.onUpdateMessageList}
          />
        </View>

        <BottomActionModal
          ref={target => (this.popUpRef = target)}
          onTouchOutSide={this.onClosePopUp}
          data={this.state.popUpList}
          openCamera={this.openCamera}
          onPressOptions={this.onPressOptions}
        />
      </View>
    )
  }
}
