'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const trx_access_token = sequelize.define('trx_access_token', {
    id_user: {
      type: DataTypes.INTEGER
    },
    access_token: {
      type: DataTypes.TEXT
    },
    ip_address: {
      type: DataTypes.STRING
    },
  }, {
    tableName: 'trx_access_tokens',
    timestamps: true
  })
  return trx_access_token;
};