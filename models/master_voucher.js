'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class master_voucher extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  master_voucher.init({
    voucher_code: DataTypes.STRING,
    description: DataTypes.TEXT,
    discount: DataTypes.INTEGER,
    category_discount: DataTypes.STRING,
    category: DataTypes.STRING,
    total_voucher: DataTypes.INTEGER,
    valid_from: DataTypes.DATE,
    valid_until: DataTypes.DATE,
    idUser_create: DataTypes.INTEGER,
    idUser_update: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'master_voucher',
  });
  return master_voucher;
};