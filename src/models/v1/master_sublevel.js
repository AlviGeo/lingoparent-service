'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const master_sublevel = sequelize.define('master_sublevel', {
    sublevel_name: {
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
    tableName: 'master_sublevels',
    timestamps: true
  })
  return master_sublevel;
};