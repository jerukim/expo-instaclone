import React from 'react';
import { View, Image, Text } from 'react-native';

export default class PhotoPreviewScreen extends React.Component {
  render() {
    const { uri } = this.props.navigation.getParam('photo');
    return (
      <View>
        <Image source={{ uri }} style={{ width: 350, height: 350 }} />
      </View>
    );
  }
}
