const { DataSource } = require('apollo-datasource');

class UserAPI extends DataSource {
  constructor({ store }) {
    super();
    this.store = store;
  }

  intialize(config) {
    this.context = config.context;
  }

  async getUserData(id) {
    try {
      const user = await this.store.users.findById(id);
      return user;
    } catch (err) {
      console.error(err);
    }
  }

  // follow/unfollow user

  // post photo

  // update bio, name, email, website, profile photo
}

module.exports = UserAPI;
