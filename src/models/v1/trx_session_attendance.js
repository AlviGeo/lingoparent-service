'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class trx_session_attendance extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  trx_session_attendance.init({
    id_session: {
      type: DataTypes.INTEGER
    },
    id_student: {
      type: DataTypes.STRING
    },
    datetime: {
      type: DataTypes.DATE
    },
    attendance: {
      type: DataTypes.STRING
    },
    feedback: {
      type: DataTypes.TEXT
    },
    notes: {
      type: DataTypes.TEXT
    },
    total_score: {
      type: DataTypes.INTEGER
    },
    idUser_create: {
      type: DataTypes.INTEGER
    },
    idUser_update: {
      type: DataTypes.INTEGER
    },
  }, {
    sequelize,
    modelName: 'trx_session_attendance',
  });
  return trx_session_attendance;
};