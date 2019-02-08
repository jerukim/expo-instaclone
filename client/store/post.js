import axios from 'axios';
import { baseURL } from '../url';
import { updatedHomeFeed } from './index';

const GET_USER_POSTS = 'GET_USER_POSTS';
const GET_USER_FEED = 'GET_USER_FEED';

const gotUserPosts = posts => ({
  type: GET_USER_POSTS,
  posts,
});

const gotUserFeed = posts => ({
  type: GET_USER_FEED,
  posts,
});

export const getUserPosts = userId => async dispatch => {
  try {
    dispatch(gotUserPosts());
  } catch (err) {
    console.error(err);
  }
};

export const getUserFeed = userId => async dispatch => {
  try {
    const response = await axios({
      url: `${baseURL}/graphql`,
      method: 'post',
      data: {
        query: `
        query {
          getUserFeed(id: ${userId}) {
            id
            path
            caption
            userId
          }
        }
          `,
      },
    });

    const postsArray = response.data.data.getUserFeed;

    const normalizedPosts = {};
    const postIds = {};

    postsArray.forEach(post => {
      normalizedPosts[post.id] = post;
      postIds[post.id] = post.id;
    });

    dispatch(gotUserFeed(normalizedPosts));
    dispatch(updatedHomeFeed(postIds));
  } catch (err) {
    console.error(err);
  }
};

const defaultState = {};

export default function(state = defaultState, action) {
  switch (action.type) {
    case GET_USER_FEED:
      return { ...state, ...action.posts };
    case GET_USER_POSTS:
      return;
    default:
      return state;
  }
}
