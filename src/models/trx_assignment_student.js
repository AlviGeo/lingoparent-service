'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class trx_assignment_student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  trx_assignment_student.init({
    id_session_assignment: DataTypes.INTEGER,
    id_session: DataTypes.INTEGER,
    id_tutor: DataTypes.STRING,
    id_student: DataTypes.STRING,
    student_answer: DataTypes.TEXT,
    score: DataTypes.INTEGER,
    feedback: DataTypes.TEXT,
    idUser_create: DataTypes.INTEGER,
    idUser_update: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'trx_assignment_student',
  });
  return trx_assignment_student;
};