const userData = [
  {
    id: 1,
    name: 'jeru kim',
    username: 'dude_man',
    website: 'google.com',
    bio: 'hello world',
    email: 'jeru@kim.com',
    password: 'password',
  },
  {
    id: 2,
    name: 'bob',
    username: 'bob.builder',
    website: 'bob.com',
    bio: 'i build things',
    email: 'bob@cat.com',
    password: 'password',
  },
  {
    id: 3,
    name: 'joe',
    username: 'average',
    website: 'www.cotton.com',
    bio: 'where did you come from, where did you go?',
    email: 'cottoneye@gmail.com',
    password: 'password',
  },
  {
    id: 4,
    name: 'steve jobs',
    username: 'apple',
    website: 'www.apple.com',
    bio: 'think different',
    email: 'steve@me.com',
    password: 'password',
  },
];

const postData = [
  {
    userId: 1,
    path: '1.jpg',
    caption: 'sludge',
  },
  {
    userId: 1,
    path: '2.jpg',
    caption: 'grave danger',
  },
  {
    userId: 1,
    path: '3.jpg',
    caption: 'the upside down',
  },
  {
    userId: 2,
    path: '4.jpg',
    caption: 'gaudi lights',
  },
  {
    userId: 2,
    path: '5.jpg',
    caption: 'snow white',
  },
  {
    userId: 2,
    path: '6.jpg',
    caption: 'mysterious',
  },
  {
    userId: 3,
    path: '7.jpg',
    caption: 'gush',
  },
  {
    userId: 3,
    path: '8.jpg',
    caption: 'broday',
  },
  {
    userId: 3,
    path: '9.jpg',
    caption: 'the shimmer',
  },
  {
    userId: 4,
    path: '10.jpg',
    caption: 'thought i looked cute, might delete later',
  },
  {
    userId: 4,
    path: '11.jpg',
    caption: 'green and yellow',
  },
  {
    userId: 4,
    path: '12.jpg',
  },
  {
    userId: 4,
    path: '13.jpg',
    caption: 'dew dew la dew dew, doo doo!',
  },
];

const likeData = [
  {
    userId: 1,
    postId: 1,
  },
  {
    userId: 2,
    postId: 1,
  },
  {
    userId: 3,
    postId: 1,
  },
  {
    userId: 4,
    postId: 1,
  },
  {
    userId: 1,
    postId: 7,
  },
  {
    userId: 2,
    postId: 7,
  },
  {
    userId: 3,
    postId: 13,
  },
];

const commentData = [
  {
    userId: 2,
    postId: 1,
    text: 'nice',
  },
  {
    userId: 3,
    postId: 1,
    text: 'great pic',
  },
  {
    userId: 1,
    postId: 8,
    text: 'so cute omg',
  },
  {
    userId: 4,
    postId: 2,
    text: 'scary',
  },
  {
    userId: 2,
    postId: 2,
    text: 'a e s t h e t i c s',
  },
  {
    userId: 1,
    postId: 9,
    text: 'so pretty!',
  },
];

const relationshipData = [
  {
    userId: 2,
    followingId: 1,
  },
  {
    userId: 3,
    followingId: 1,
  },
  {
    userId: 4,
    followingId: 1,
  },
  {
    userId: 1,
    followingId: 2,
  },
  {
    userId: 3,
    followingId: 2,
  },
  {
    userId: 2,
    followingId: 4,
  },
  {
    userId: 4,
    followingId: 3,
  },
  {
    userId: 3,
    followingId: 4,
  },
];

module.exports = {
  userData,
  postData,
  likeData,
  commentData,
  relationshipData,
};
