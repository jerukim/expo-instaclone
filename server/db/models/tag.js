const Sequelize = require('sequelize');
const db = require('../db');

const Tag = db.define('tag', {
  tag: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmtpy: true,
    },
  },
});

module.exports = Tag;
