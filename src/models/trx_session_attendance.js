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
    id_session: DataTypes.INTEGER,
    id_student: DataTypes.STRING,
    datetime: DataTypes.DATE,
    attendance: DataTypes.STRING,
    feedback: DataTypes.TEXT,
    notes: DataTypes.TEXT,
    total_score: DataTypes.INTEGER,
    idUser_create: DataTypes.INTEGER,
    idUser_update: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'trx_session_attendance',
  });
  return trx_session_attendance;
};