import React, {Component} from 'react';
import {Text, View, Modal, TouchableOpacity} from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import {SafeAreaView} from 'react-native-safe-area-context';
import {colors} from '../../configs/colors';
import {normalize} from '../../styles/utilityStyle';
import CustomIcons from '../CustomIcons';

export default class ImageZoomViewerComponent extends Component {
  // state = {
  //   index: 0,
  //   modalVisible: true,
  // };

  renderHeader = () => {
    return (
      <TouchableOpacity
        onPress={this.props.onCloseModal}
        style={{padding: 20, position: 'absolute', top: 20}}>
        <CustomIcons.Ionicons
          name="chevron-back-sharp"
          color={colors.white}
          size={normalize(20)}
        />
      </TouchableOpacity>
    );
  };
  render() {
    const {images, index, modalVisible, onCloseModal} = this.props;

    const imagesList = images.map(item => {
      return {
        url: item.path,
        freeHeight: true,
      };
    });
    console.log(imagesList);
    return (
      <SafeAreaView
        style={{
          padding: 10,
        }}>
        <Modal
          visible={modalVisible}
          transparent={true}
          onRequestClose={() => this.setState({modalVisible: false})}>
          <ImageViewer
            imageUrls={imagesList}
            index={index}
            onSwipeDown={() => {
              onCloseModal();
            }}
            renderHeader={this.renderHeader}
            enableSwipeDown={true}
          />
        </Modal>
      </SafeAreaView>
    );
  }
}
