'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const trx_session_schedule = sequelize.define('trx_session_schedule', {
    id_course: {
      type: DataTypes.INTEGER
    },
    id_session: {
      type: DataTypes.INTEGER
    },
    id_tutor: {
      type: DataTypes.STRING
    },
    datetime: {
      type: DataTypes.DATE
    },
    idUser_create: {
      type: DataTypes.INTEGER
    },
    idUser_update: {
      type: DataTypes.INTEGER
    },
  }, {
    tableName: 'trx_session_schedules',
    timestamps: true
  })
  return trx_session_schedule;
};