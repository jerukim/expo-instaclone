import React from 'react';
import { connect } from 'react-redux';
import { Text, SafeAreaView, Button, Image, ScrollView } from 'react-native';
import { removeUser, fetchUserData } from '../../store';

class UserScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('username', 'you'),
    };
  };

  logout = () => {
    const { navigate } = this.props.navigation;
    this.props.removeUser();
    navigate('Auth');
  };

  fetchUserData = userId => {
    this.props.fetchUserData(userId);
  };

  componentDidMount() {
    this.fetchUserData(this.props.user.id);
    this.props.navigation.setParams({ username: this.props.user.username });
  }

  render() {
    const { user } = this.props;
    const uri = `https://s3.us-east-2.amazonaws.com/instaclone-jeru${
      user.profilePhoto
    }`;
    return (
      <SafeAreaView>
        <ScrollView>
          <Image source={{ uri }} style={{ width: 150, height: 150 }} />
          <Text>Posts: {user.postCount}</Text>
          <Text>Follower: {user.followers}</Text>
          <Text>Following: {user.following}</Text>
          <Text>{user.name}</Text>
          <Text>{user.bio}</Text>
          <Text>{user.website}</Text>
          <Button title="Sign Out" onPress={this.logout} />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const mapState = state => ({
  user: state.user,
});

const mapDispatch = dispatch => ({
  removeUser: () => dispatch(removeUser()),
  fetchUserData: id => dispatch(fetchUserData(id)),
});

export default connect(
  mapState,
  mapDispatch
)(UserScreen);

// map user store to props
// if user doesnt exist, fetch user data
