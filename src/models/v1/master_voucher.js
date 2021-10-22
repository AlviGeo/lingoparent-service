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
    sequelize,
    modelName: 'master_voucher',
  });
  return master_voucher;
};