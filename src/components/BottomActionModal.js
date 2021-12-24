import React, { Component } from 'react'
import {
  Text,
  View,
  Modal,
  TouchableWithoutFeedback,
  Dimensions,
  FlatList,
  TouchableOpacity
} from 'react-native'

import Feather from 'react-native-vector-icons/Feather'
import { colors } from '../configs/colors'
const deviceHeight = Dimensions.get('window').height
export default class BottomActionModal extends Component {
  constructor (props) {
    super(props)
    this.state = {
      show: false
    }
  }
  show = () => {
    this.setState({ show: true })
  }
  close = () => {
    this.setState({ show: false })
  }
  renderOutSideTouchable = onTouch => {
    const view = <View style={{ flex: 1, width: '100%' }} />
    if (!onTouch) return view
    return (
      <TouchableWithoutFeedback
        onPress={onTouch}
        style={{ flex: 1, width: '100%' }}
      >
        {view}
      </TouchableWithoutFeedback>
    )
  }

  renderItem = ({ item }) => {
    const { onPressOptions } = this.props
    return (
      <TouchableWithoutFeedback onPress={onPressOptions(item.id)}>
        <View style={{ flex: 1, alignItems: 'center', flexDirection: 'row' }}>
          <Feather
            name={item.icon}
            size={23}
            color={colors.lightBlue}
            style={{ marginHorizontal: 10, paddingVertical: 10 }}
          />
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'normal',
              color: item.color ? item.color : colors.gray,
              marginLeft: 10
            }}
          >
            {item.title}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    )
  }
  renderSeparator = () => {
    return (
      <View style={{ opacity: 0.1, backgroundColor: '#182e44', height: 1 }} />
    )
  }
  renderContent = () => {
    const { data } = this.props
    return (
      <View
        style={{
          margin: 10
        }}
      >
        <FlatList
          //   style={{marginBottom: 20}}
          showsVerticalScrollIndicator={false}
          data={data}
          renderItem={this.renderItem}
          extraData={data}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    )
  }

  render () {
    const { show } = this.state
    const { onTouchOutSide, data } = this.props
    return (
      <Modal animationType={'fade'} transparent={true} visible={show}>
        <View
          style={{
            flex: 1,
            backgroundColor: '#000000AA',
            justifyContent: 'flex-end'
          }}
        >
          {this.renderOutSideTouchable(onTouchOutSide)}
          <View
            style={{
              backgroundColor: colors.white,
              width: '98%',
              alignSelf: 'center',
              marginBottom: 5,
              borderRadius: 15,
              maxHeight: deviceHeight * (0.1 * data.length)
            }}
          >
            {this.renderContent()}
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: colors.white,
              width: '98%',
              alignSelf: 'center',
              justifyContent: 'center',
              borderRadius: 15,
              paddingHorizontal: 10,
              marginBottom: 15,
              height: deviceHeight * 0.07
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'normal',
                color: colors.deepBlue,
                textAlign: 'center'
              }}
              onPress={this.close}
            >
              Cancel
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
    )
  }
}
