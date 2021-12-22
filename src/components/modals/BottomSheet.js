import React from 'react'
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Pressable,
} from 'react-native'

export default class BottomSheet extends React.Component {
  render () {
    const {
      modalVisible,
      onPressCloseModal,
      children,
      color,
      closeCross,
      height,
      onClose,
    } = this.props
    return (
      // Modal View
      <Modal
        animationType='fade'
        transparent={true}
        visible={modalVisible}
        presentationStyle='overFullScreen'>
        {/* Background of Modal */}
        <Pressable
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'center',
            backgroundColor: 'rgba(0,0,0,0.6)',
          }}
          onPress={onClose}>
          <View style={{height: height, width: '100%'}}>{children}</View>
        </Pressable>
      </Modal>
    )
  }
}
