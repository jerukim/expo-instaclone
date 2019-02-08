const { DataSource } = require('apollo-datasource');
const { Op } = require('sequelize');

class PostAPI extends DataSource {
  constructor({ store }) {
    super();
    this.store = store;
  }

  initialize(config) {
    this.context = config.context;
  }

  async getUserPosts(userId) {
    try {
      const userPosts = await this.store.posts.findAll({
        where: { userId },
      });
      return userPosts;
    } catch (err) {
      console.error(err);
    }
  }

  async getUserFeed(userIds) {
    try {
      const userFeed = await this.store.posts.findAll({
        where: {
          userId: {
            [Op.or]: userIds,
          },
        },
      });
      return userFeed;
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = PostAPI;
