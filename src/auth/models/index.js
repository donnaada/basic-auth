'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const user = require('./user-model');

const DB_URL = process.env.NODE_ENV === 'test' ? 'sqlite::memory:' : process.env.DATABASE_URL;

const sequelizeDB = new Sequelize(DB_URL);

const userModel = user(sequelizeDB, DataTypes);

module.exports = {
  sequelizeDB,
  userModel,
};
