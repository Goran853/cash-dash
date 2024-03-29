'use strict';
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('cash_dash', 'goran', '', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false,
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

module.exports = sequelize;
