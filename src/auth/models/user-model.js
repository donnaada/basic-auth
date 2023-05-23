'use strict';

module.exports = (sequelizeDB, DataTypes) =>{
  return sequelizeDB.define('users',{
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};

