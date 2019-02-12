import React from 'react';
import {
  KeyboardAvoidingView,
  Dimensions,
  Image,
  TextInput,
} from 'react-native';

export default class NewPostScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
    };
  }
  render() {
    const { uri } = this.props.navigation.getParam('photo');
    const width = Dimensions.get('window').width;
    return (
      <KeyboardAvoidingView behavior="padding" enabled>
        <Image source={{ uri }} style={{ width, height: width }} />
        <TextInput
          style={{ height: 40 }}
          placeholder="Write a caption..."
          onChangeText={text => this.setState({ text })}
        />
      </KeyboardAvoidingView>
    );
  }
}
