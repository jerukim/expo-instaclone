import React from 'react';
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  Dimensions,
  Image,
  TextInput,
} from 'react-native';
import { Header } from 'react-navigation';

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
      height: 0,
      width: 0,
      uri: '',
    };
  }

  async componentDidMount() {
    const { uri } = await this.props.navigation.getParam('photo');
    const width = Dimensions.get('window').width;
    this.setState({ uri, width });
  }

  render() {
    const { uri, width } = this.state;
    return (
      <KeyboardAvoidingView
        styles={styles.container}
        keyboardVerticalOffset={Header.HEIGHT + 30}
        behavior="height"
        enabled
      >
        <View>
          <Image source={{ uri }} style={{ width, height: width }} />
          <TextInput
            style={{ height: 60 }}
            multiline={true}
            numberOfLines={4}
            returnKeyType="done"
            blurOnSubmit={true}
            placeholder="Write a caption..."
            onChangeText={text => this.setState({ text })}
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}
