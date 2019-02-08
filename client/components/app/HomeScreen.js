import React from 'react';
import { Text, SafeAreaView } from 'react-native';
import Feed from './Feed';

class HomeScreen extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <Feed />
      </SafeAreaView>
    );
  }
}

export default HomeScreen;
