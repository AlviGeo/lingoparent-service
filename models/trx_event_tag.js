'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class trx_event_tag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  trx_event_tag.init({
    id_event: DataTypes.INTEGER,
    id_tag: DataTypes.INTEGER,
    idUser_create: DataTypes.INTEGER,
    idUser_update: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'trx_event_tag',
  });
  return trx_event_tag;
};