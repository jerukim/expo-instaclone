const { DataSource } = require('apollo-datasource');

class RelationshipAPI extends DataSource {
  constructor({ store }) {
    super();
    this.store = store;
  }

  initialize(config) {
    this.context = config.context;
  }

  async getUserRelationshipCounts(userId) {
    try {
      const userFollowersPromise = this.store.relationships.findAll({
        where: { followingId: userId },
      });
      const userFollowingPromise = this.store.relationships.findAll({
        where: { userId },
      });

      const [userFollowers, userFollowing] = await Promise.all([
        userFollowersPromise,
        userFollowingPromise,
      ]);

      return {
        followersCount: userFollowers.length,
        followingCount: userFollowing.length,
      };
    } catch (err) {
      console.error(err);
    }
  }

  async getUserFollowingList(userId) {
    try {
      const res = await this.store.relationships.findAll({
        attributes: ['followingId'],
        where: { userId },
      });

      const userFollowing = res.map(({ dataValues }) => dataValues.followingId);

      return userFollowing;
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = RelationshipAPI;
