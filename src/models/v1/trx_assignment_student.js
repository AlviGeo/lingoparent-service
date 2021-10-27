'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const trx_assignment_student = sequelize.define('trx_assignment_student', {
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
    tableName: 'trx_assignment_students',
    timestamps: true
  })
  return trx_assignment_student;
};