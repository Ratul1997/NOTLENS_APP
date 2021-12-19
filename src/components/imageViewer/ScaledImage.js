import React, {Component, PropTypes} from 'react';
import {Dimensions} from 'react-native';
import {Image} from 'react-native';
import {colors} from '../../configs/colors';
import {normalize} from '../../styles/utilityStyle';
import CacheImageComponent from './CacheImageComponent';
const win = Dimensions.get('window');
export default class ScaledImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      source: {uri: this.props.uri},
      width: win.width,
      height: normalize(295),
    };
  }

  render() {
    return (
      <CacheImageComponent
        url={this.state.source.uri}
        styles={{
          height: this.state.height,
          width: this.state.width,
          backgroundColor: colors.lightGray,
        }}
      />
    );
  }
}
