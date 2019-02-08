const Sequelize = require('sequelize');
const db = require('../db');

// needs user_id and following_user_Id
const Relationship = db.define('relationship', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
});

module.exports = Relationship;
