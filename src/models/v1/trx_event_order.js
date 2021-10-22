'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class trx_event_order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  trx_event_order.init({
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
  }, {
    sequelize,
    modelName: 'trx_event_order',
  });
  return trx_event_order;
};