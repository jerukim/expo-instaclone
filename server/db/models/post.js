const Sequelize = require('sequelize');
const db = require('../db');

const Post = db.define('post', {
  path: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      isUrl: true,
    },
  },
  caption: {
    type: Sequelize.TEXT,
    allowNull: true,
  },
});

module.exports = Post;
