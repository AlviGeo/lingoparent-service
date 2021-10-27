'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const trx_event_order = sequelize.define('trx_event_order', {
    id_event: {
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
  })
  trx_event_order.init({
    
  }, {
    sequelize,
    modelName: 'trx_event_orders',
    timestamps: true
  });
  return trx_event_order;
};