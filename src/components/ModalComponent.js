import React from 'react'
import { View, Text, Modal, TouchableOpacity } from 'react-native'

export default class ModalComponent extends React.Component {
  render () {
    const {
      modalVisible,
      onPressCloseModal,
      children,
      color,
      closeCross
    } = this.props
    return (
      // Modal View
      <Modal
        animationType='fade'
        transparent={true}
        visible={modalVisible}
        presentationStyle='overFullScreen'
      >
        {/* Background of Modal */}
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0,0,0,0.9)'
          }}
        >
          {children}
        </View>
      </Modal>
    )
  }
}
