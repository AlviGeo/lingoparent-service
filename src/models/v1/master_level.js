'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const master_level = sequelize.define('master_level', {
    level_name: {
      type: DataTypes.STRING
    },
    category: {
      type: DataTypes.STRING
    },
    idUser_create: {
      type: DataTypes.INTEGER
    },
    idUser_update: {
      type: DataTypes.INTEGER
    },
  }, {
    tableName: 'master_levels',
    timestamps: true
  })
  return master_level;
};