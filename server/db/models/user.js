const crypto = require('crypto');
const Sequelize = require('sequelize');
const db = require('../db');

const User = db.define('user', {
  name: {
    type: Sequelize.STRING,
    allowNull: true,
    validate: {
      notEmpty: true,
      characterLimit(value) {
        checkCharacterCount(value, 30);
      },
    },
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: true,
      notContains: {
        args: '..',
        msg: "You can't have more than one period in a row",
      },
      noPeriodAtStartOrEnd(value) {
        if (value.startsWith('.'))
          throw new Error(`You can't start your username with a period`);

        if (value.endsWith('.'))
          throw new Error(`You can't end your username with a period`);
      },
      characterLimit(value) {
        checkCharacterCount(value, 30);
      },
    },
  },
  website: {
    type: Sequelize.STRING,
    allowNull: true,
    validate: {
      isUrl: true,
      notEmpty: true,
    },
  },
  bio: {
    type: Sequelize.TEXT,
    allowNull: true,
    validate: {
      characterLimit(value) {
        checkCharacterCount(value, 150);
      },
    },
  },
  profilePhoto: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: '/default-profile.png',
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: true,
    },
  },
  password: {
    type: Sequelize.STRING,
    get() {
      return () => this.getDataValue('password');
    },
  },
  salt: {
    type: Sequelize.STRING,
    get() {
      return () => this.getDataValue('salt');
    },
  },
});

module.exports = User;

User.prototype.correctPassword = function(candidatePwd) {
  return User.encryptPassword(candidatePwd, this.salt()) === this.password();
};

User.generateSalt = function() {
  return crypto.randomBytes(16).toString('base64');
};

User.encryptPassword = function(plainText, salt) {
  return crypto
    .createHash('RSA-SHA256')
    .update(plainText)
    .update(salt)
    .digest('hex');
};

const setSaltAndPassword = user => {
  if (user.changed('password')) {
    user.salt = User.generateSalt();
    user.password = User.encryptPassword(user.password(), user.salt());
  }
};

const checkCharacterCount = (str, num) => {
  if (str.length > num)
    throw new Error(`Ensure this value has at most ${num} characters`);
};

User.beforeCreate(setSaltAndPassword);
User.beforeUpdate(setSaltAndPassword);
