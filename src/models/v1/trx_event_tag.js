'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const trx_event_tag = sequelize.define('trx_event_tag', {
    id_event: {
      type: DataTypes.INTEGER
    },
    id_tag: {
      type: DataTypes.INTEGER
    },
    idUser_create: {
      type: DataTypes.INTEGER
    },
    idUser_update: {
      type: DataTypes.INTEGER
    },
  }, {
    tableName: 'trx_event_tags',
    timestamps: true
  })
  return trx_event_tag;
};