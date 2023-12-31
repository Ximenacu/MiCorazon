const Sequelize = require('sequelize');
require('dotenv').config();

// Create a connection object
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PW,
  {
    // Database location
    host: process.env.HOST,
    dialect: 'mysql',
    port: 3306
  }
);


module.exports = sequelize;