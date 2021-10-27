'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const trx_course_participant = sequelize.define('trx_course_participant', {
    id_student: {
      type: DataTypes.STRING
    },
    id_course: {
      type: DataTypes.INTEGER
    },
    total_hour: {
      type: DataTypes.TIME
    },
    overall_feedback: {
      type: DataTypes.TEXT
    },
    overall_score: {
      type: DataTypes.INTEGER
    },
    idUser_create: {
      type: DataTypes.INTEGER
    },
    idUser_update: {
      type: DataTypes.INTEGER
    },
  }, {
    tableName: 'trx_course_participants',
    timestamps: true
  })
  return trx_course_participant;
};