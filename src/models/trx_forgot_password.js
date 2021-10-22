'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class trx_forgot_password extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  trx_forgot_password.init({
    id_user: DataTypes.INTEGER,
    token: DataTypes.TEXT,
    is_consumed: DataTypes.STRING,
    is_expired: DataTypes.STRING,
    expiration_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'trx_forgot_password',
  });
  return trx_forgot_password;
};