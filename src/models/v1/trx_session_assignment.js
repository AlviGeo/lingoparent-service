'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class trx_session_assignment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  trx_session_assignment.init({
    id_session: {
      type: DataTypes.INTEGER
    },
    question: {
      type: DataTypes.TEXT
    },
    answer: {
      type: DataTypes.TEXT
    },
    idUser_create: {
      type: DataTypes.INTEGER
    },
    idUser_update: {
      type: DataTypes.INTEGER
    },
  }, {
    sequelize,
    modelName: 'trx_session_assignment',
  });
  return trx_session_assignment;
};