const Sequelize = require('sequelize');
const pkg = require('../../package.json');

const dev = process.env.NODE_ENV === 'development';
console.log('QWERTY', dev);

const db = dev
  ? new Sequelize(`postgres://localhost:5432/${pkg.name}`, {
      logging: false,
    })
  : new Sequelize(
      process.env.RDS_DB_NAME,
      process.env.RDS_USERNAME,
      process.env.RDS_PASSWORD,
      {
        host: process.env.RDS_HOSTNAME,
        port: process.env.RDS_PORT,
        dialect: 'postgres',
        logging: false,
      }
    );

module.exports = db;
