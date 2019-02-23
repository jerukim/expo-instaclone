import React from 'react';
import {
  StyleSheet,
  KeyboardAvoidingView,
  Dimensions,
  Image,
  TextInput,
  Header,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

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
      <KeyboardAvoidingView
        styles={styles.container}
        keyboardVerticalOffset={50}
        behavior="position"
        enabled
      >
        <Image source={{ uri }} style={{ width, height: width }} />
        <TextInput
          style={{ height: 200 }}
          multiline={true}
          numberOfLines
          placeholder="Write a caption..."
          onChangeText={text => this.setState({ text })}
        />
      </KeyboardAvoidingView>
    );
  }
}
