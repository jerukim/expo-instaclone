const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    name: String
    username: String!
    website: String
    bio: String
    email: String
    followersCount: Int
    followingCount: Int
    posts: [Post]
    postCount: Int
    profilePhoto: String
  }

  type Post {
    id: Int!
    path: String!
    caption: String
    userId: Int!
  }

  type Like {
    count: Int!
  }

  type Comment {
    text: String
  }

  type Query {
    getUserDataById(id: Int!): User
    postsByUserId(id: Int!): [Post]
    getUserFeed(id: Int!): [Post]
  }
`;

const resolvers = {
  Query: {
    getUserDataById: async (parent, args, { dataSources }, info) => {
      try {
        const { id } = args;

        const userDataPromise = dataSources.userAPI.getUserData(id);
        const userRelationshipsPromise = dataSources.relationshipAPI.getUserRelationshipCounts(
          id
        );
        const userPostsPromise = dataSources.postAPI.getUserPosts(id);

        const [userData, userRelationships, userPosts] = await Promise.all([
          userDataPromise,
          userRelationshipsPromise,
          userPostsPromise,
        ]);

        userData.posts = userPosts;
        userData.postCount = userPosts.length;
        userData.followingCount = userRelationships.followingCount;
        userData.followersCount = userRelationships.followingCount;

        return userData;
      } catch (err) {
        console.error(err);
      }
    },
    postsByUserId: async (parent, args, { dataSources }, info) => {
      try {
        const userPosts = await dataSources.postAPI.getUserPosts(args.id);
        return userPosts;
      } catch (err) {
        console.error(err);
      }
    },
    getUserFeed: async (parent, args, { dataSources }, info) => {
      try {
        const userFollowing = await dataSources.relationshipAPI.getUserFollowingList(
          args.id
        );
        const userFeed = await dataSources.postAPI.getUserFeed([
          ...userFollowing,
          args.id,
        ]);

        return userFeed;
      } catch (err) {
        console.error(err);
      }
    },
  },
};

module.exports = {
  typeDefs,
  resolvers,
};
