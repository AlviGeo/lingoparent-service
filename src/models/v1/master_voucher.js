'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const master_voucher = sequelize.define('master_voucher', {
    voucher_code: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.TEXT
    },
    discount: {
      type: DataTypes.INTEGER
    },
    category_discount: {
      type: DataTypes.STRING
    },
    category: {
      type: DataTypes.STRING
    },
    total_voucher: {
      type: DataTypes.INTEGER
    },
    valid_from: {
      type: DataTypes.DATE
    },
    valid_until: {
      type: DataTypes.DATE
    },
    idUser_create: {
      type: DataTypes.INTEGER
    },
    idUser_update: {
      type: DataTypes.INTEGER
    },
  }, {
    tableName: 'master_vouchers',
    timestamps: true
  })
  return master_voucher;
};