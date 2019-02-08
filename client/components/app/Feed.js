import React from 'react';
import { connect } from 'react-redux';
import {
  SafeAreaView,
  View,
  Text,
  Button,
  Image,
  FlatList,
} from 'react-native';

import { getUserFeed } from '../../store';

class Feed extends React.PureComponent {
  async componentDidMount() {
    await this.props.getUserFeed(this.props.user.id);
  }
  render() {
    const { feed, posts } = this.props;
    const uri = `https://s3.us-east-2.amazonaws.com/instaclone-jeru/`;

    // if (!this.props.post.following.length) return;

    return (
      <SafeAreaView>
        <FlatList
          data={Object.keys(feed)}
          renderItem={({ item }) => {
            return (
              <View key={item}>
                <Image
                  source={{ uri: `${uri}${posts[item].path}` }}
                  style={{ width: 350, height: 350 }}
                />
                <Text>{posts[item].caption}</Text>
              </View>
            );
          }}
        />
      </SafeAreaView>
    );
  }
}

const mapState = state => ({
  user: state.user,
  posts: state.posts,
  feed: state.feed,
});

const mapDispatch = dispatch => ({
  getUserFeed: userId => dispatch(getUserFeed(userId)),
});

export default connect(
  mapState,
  mapDispatch
)(Feed);
