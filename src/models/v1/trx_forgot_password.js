'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const trx_forgot_password = sequelize.define('trx_forgot_password', {
    id_user: {
      type: DataTypes.INTEGER
    },
    token: {
      type: DataTypes.TEXT
    },
    is_consumed: {
      type: DataTypes.STRING
    },
    is_expired: {
      type: DataTypes.STRING
    },
    expiration_date: {
      type: DataTypes.DATE
    },
  }, {
    tableName: 'trx_forgot_passwords',
    timestamps: true
  })
  return trx_forgot_password;
};