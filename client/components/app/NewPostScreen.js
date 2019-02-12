import React from 'react';
import { View, Image, Text, Dimensions } from 'react-native';

export default class NewPostScreen extends React.Component {
  render() {
    const { uri } = this.props.navigation.getParam('photo');
    const width = Dimensions.get('window').width;
    return (
      <View>
        <Image source={{ uri }} style={{ width, height: width }} />
      </View>
    );
  }
}
