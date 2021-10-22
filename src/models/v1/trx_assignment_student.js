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
    id_session_assignment: {
      type: DataTypes.INTEGER
    },
    id_session: {
      type: DataTypes.INTEGER
    },
    id_tutor: {
      type: DataTypes.STRING
    },
    id_student: {
      type: DataTypes.STRING
    },
    student_answer: {
      type: DataTypes.TEXT
    },
    score: {
      type: DataTypes.INTEGER
    },
    feedback: {
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
    modelName: 'trx_assignment_student',
  });
  return trx_assignment_student;
};