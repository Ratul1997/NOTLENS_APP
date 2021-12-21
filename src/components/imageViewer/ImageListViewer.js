import React, {Component} from 'react';
import {FlatList} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {Text, View} from 'react-native';

import CommonHeader from '../CommonHeader';
import ScaledImage from './ScaledImage';
import ImageZoomViewerComponent from './ImageZoomViewerComponent';
import {SafeAreaView} from 'react-native-safe-area-context';

import {colors, theme} from '../../configs/colors';
import {normalize} from '../../styles/utilityStyle';
import CustomIcons from '../CustomIcons';

export default class ImageListViewer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [],
      modalVisible: false,
      index: 0,
    };
  }

  toggleModal = () => this.setState({modalVisible: !this.state.modalVisible});

  onPressImage = index => {
    this.setState({index: index});
    this.toggleModal();
  };
  renderItem = ({item, index}) => {
    console.log(item.path);

    return (
      <TouchableOpacity
        style={{marginVertical: 10}}
        onPress={() => this.onPressImage(index)}>
        <ScaledImage uri={item.path ?? item.url} />
      </TouchableOpacity>
    );
  };
  LeftIconHeader = () => {
    return (
      <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
        <CustomIcons.Ionicons
          name="chevron-back-sharp"
          color={colors.lightBlack}
          size={normalize(20)}
        />
      </TouchableOpacity>
    );
  };

  onCloseModal = () => {
    this.setState({index: 0});
    this.toggleModal();
  };
  render() {
    const {index, modalVisible} = this.state;
    const {route} = this.props;
    const images = this.props.route.params?.images;
    const imageList = images
      ? typeof images === 'string'
        ? JSON.parse(images)
        : images
      : [];
    console.log(imageList);
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: theme.backgroundColor}}>
        <FlatList
          data={imageList}
          showsVerticalScrollIndicator={false}
          renderItem={this.renderItem}
          ListHeaderComponent={() => (
            <CommonHeader
              LeftIcon={this.LeftIconHeader()}
              alignLeft={true}
              title="Images"
              customBackgroundColor={theme.backgroundColor}
            />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
        <ImageZoomViewerComponent
          images={imageList}
          modalVisible={modalVisible}
          index={index}
          onCloseModal={this.onCloseModal}
        />
      </SafeAreaView>
    );
  }
}
