import React from 'react';
import {TextInput} from 'react-native';
import { colors } from '../../configs/colors';
export default class AutoExpandingTextInput extends React.Component {
  state = {
    height: 30,
  };
  render() {
    return (
      <TextInput
        {...this.props}
        multiline={true}
        onContentSizeChange={event => {
          this.setState({height: event.nativeEvent.contentSize.height});
        }}
        style={{
          backgroundColor: 'transparent',
          marginRight: 3,
          height: Math.max(40, this.state.height),
          maxHeight: 85,
          width: '90%',
        }}
        selectionColor={colors.blue}
      />
    );
  }
}
