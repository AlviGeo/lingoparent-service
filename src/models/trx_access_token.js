'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class trx_access_token extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  trx_access_token.init({
    id_user: DataTypes.INTEGER,
    access_token: DataTypes.TEXT,
    ip_address: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'trx_access_token',
  });
  return trx_access_token;
};