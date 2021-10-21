'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class trx_parent_relations extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  trx_parent_relations.init({
    id_student: DataTypes.STRING,
    id_parent: DataTypes.STRING,
    parent_relationship: DataTypes.STRING,
    status: DataTypes.STRING,
    idUser_create: DataTypes.INTEGER,
    idUser_update: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'trx_parent_relations',
  });
  return trx_parent_relations;
};