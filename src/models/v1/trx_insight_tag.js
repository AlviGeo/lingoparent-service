'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const trx_insight_tag = sequelize.define('trx_insight_tag', {
    id_insight: {
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
    tableName: 'trx_insight_tags',
    timestamps: true
  })
  return trx_insight_tag;
};