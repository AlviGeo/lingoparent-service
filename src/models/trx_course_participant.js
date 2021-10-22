'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class trx_course_participant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  trx_course_participant.init({
    id_student: DataTypes.STRING,
    id_course: DataTypes.INTEGER,
    total_hour: DataTypes.TIME,
    overall_feedback: DataTypes.TEXT,
    overall_score: DataTypes.INTEGER,
    idUser_create: DataTypes.INTEGER,
    idUser_update: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'trx_course_participant',
  });
  return trx_course_participant;
};