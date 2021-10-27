'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const trx_course_order = sequelize.define('trx_course_order', {
    id_course: {
      type: DataTypes.INTEGER
    },
    id_user: {
      type: DataTypes.INTEGER
    },
    total_price: {
      type: DataTypes.INTEGER
    },
    voucher_code: {
      type: DataTypes.STRING
    },
    payment_method: {
      type: DataTypes.STRING
    },
    status: {
      type: DataTypes.STRING
    },
    idUser_create: {
      type: DataTypes.INTEGER
    },
    idUser_update: {
      type: DataTypes.INTEGER
    },
  }, {
    tableName: 'trx_course_orders',
    timestamps: true
  })
  return trx_course_order;
};