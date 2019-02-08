import React from 'react';
import { ActivityIndicator, StatusBar, View } from 'react-native';
import { connect } from 'react-redux';

class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this.checkForUser();
  }

  checkForUser = () => {
    const { navigate } = this.props.navigation;
    const { isLoggedIn } = this.props;
    navigate(isLoggedIn ? 'App' : 'Auth');
  };

  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

const mapState = state => ({
  isLoggedIn: !!state.user.id,
});

export default connect(mapState)(AuthLoadingScreen);
