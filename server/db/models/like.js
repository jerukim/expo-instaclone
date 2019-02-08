const Sequelize = require('sequelize');
const db = require('../db');

const Like = db.define('like', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
});

module.exports = Like;
