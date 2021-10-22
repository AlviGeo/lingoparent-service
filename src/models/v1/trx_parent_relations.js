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
    id_student: {
      type: DataTypes.STRING
    },
    id_parent: {
      type: DataTypes.STRING
    },
    parent_relationship: {
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
    modelName: 'trx_parent_relations',
  });
  return trx_parent_relations;
};