import React, { Component, useState, useEffect } from 'react'
import {
  View,
  Text,
  TouchableHighlight,
  Image,
  FlatList,
  TextInput,
  Button,
  TouchableOpacity
} from 'react-native'
import ListItem from './ListItem'
import firestore from '@react-native-firebase/firestore'
import { MessageListItemModel } from '../../model/MessageModel'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors, theme } from '../../configs/colors'
import CustomIcons from '../../components/CustomIcons'
import { normalize } from '../../styles/utilityStyle'
import CustomHeader from '../../components/CommonHeader'
export default function MessageList ({ navigation }) {
  const [messageList, setMessageList] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const uid = 'SDSDSDSDSD'
    const subscribed = firestore()
      .collection('Messages')
      .where('initialMessage', 'array-contains', 'SDSDSDSDSD')
      .onSnapshot(querySnapshot => {
        const messageList = querySnapshot.docs.map(doc => {
          const item = doc.data()
          return MessageListItemModel(item, uid, doc.id)
        })
        setMessageList(messageList)
      })

    return subscribed
  }, [])

  const renderItem = ({ item, index }) => {
    const uid = 'SDSDSDSDSD'
    return <ListItem item={item} navigation={navigation} uid={uid} />
  }
  const LeftIconHeader = () => {
    return (
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{ justifyContent: 'center' }}
      >
        <CustomIcons.Ionicons
          name='chevron-back-sharp'
          color={colors.lightBlack}
          size={normalize(20)}
        />
      </TouchableOpacity>
    )
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.backgroundColor }}>
      <CustomHeader title='Chats' LeftIcon={LeftIconHeader()} />
      {messageList.length === 0 ? (
        <Text
          style={{
            color: theme.fontColor,
            textAlign: 'center',
            fontSize: normalize(10),
            marginTop: normalize(10)
          }}
        >
          No Chat Found
        </Text>
      ) : (
        <FlatList
          data={messageList}
          style={{ height: '100%' }}
          renderItem={renderItem}
          keyExtractor={item => item.uid}
        />
      )}
    </SafeAreaView>
  )
}
