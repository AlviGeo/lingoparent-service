'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const trx_session_attendance = sequelize.define('trx_session_attendance', {
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
    tableName: 'trx_session_attendances',
    timestamps: true
  })
  return trx_session_attendance;
};