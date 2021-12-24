import React from 'react'
import { View, FlatList } from 'react-native'
import SendMessage from './MessageType/SendMessage'
import ReceivedMessage from './MessageType/ReceivedMessage'
import { messages } from '../../@fakedb/messages'
import firestore from '@react-native-firebase/firestore'
import { MessageModel } from '../../model/MessageModel'
import { theme } from '../../configs/colors'

class MessagingContainer extends React.Component {
  componentDidMount () {
    this.loadMessages()
  }
  componentWillUnmount () {
    // this.unsubscribe()
  }
  loadMessages = async () => {
    const { uid, item } = this.props
    const dockKey = item.id !== 'string' ? item.id.toString() : item.id
    this.unsubscribe = firestore()
      .collection('Messages')
      .doc(dockKey)
      .collection('messages')
      .orderBy('dateTime', 'desc')
      .onSnapshot(querySnapshot => {
        const messages = querySnapshot.docs.map(doc => {
          return MessageModel(doc.data(), doc.id)
        })
        this.props.updateMessageState(messages)
      })
  }

  checkNextMessage = (messages, index) => {
    if (index === 0) return true
    return messages[index - 1].uid !== messages[index].uid ? true : false
  }
  renderItem = ({ item, index }) => {
    const { uid } = this.props
    const dockKey = this.props.item.id

    if (item.uid !== uid) {
      return (
        <ReceivedMessage
          data={item}
          lastMessage={this.checkNextMessage(this.props.messages, index)}
          name={this.props.name}
          dockKey={dockKey}
        />
      )
    } else {
      return (
        <SendMessage
          data={item}
          dockKey={dockKey}
          to={this.props.item}
          lastMessage={this.checkNextMessage(this.props.messages, index)}
        />
      )
    }
  }
  render () {
    return (
      <View style={{ backgroundColor: theme.backgroundColor }}>
        <FlatList
          data={this.props.messages}
          renderItem={this.renderItem}
          keyExtractor={item => item.id}
          style={{ marginBottom: 50 }}
          inverted
        />
      </View>
    )
  }
}
export default MessagingContainer
