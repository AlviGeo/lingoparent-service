'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class trx_course_order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  trx_course_order.init({
    id_course: DataTypes.INTEGER,
    id_user: DataTypes.INTEGER,
    total_price: DataTypes.INTEGER,
    voucher_code: DataTypes.STRING,
    payment_method: DataTypes.STRING,
    status: DataTypes.STRING,
    idUser_create: DataTypes.INTEGER,
    idUser_update: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'trx_course_order',
  });
  return trx_course_order;
};