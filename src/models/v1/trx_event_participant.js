'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const trx_event_participant = sequelize.define('trx_event_participant', {
    id_event: {
      type: DataTypes.INTEGER
    },
    id_user: {
      type: DataTypes.INTEGER
    },
    fullname: {
      type: DataTypes.STRING
    },
    phone: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    },
    attendance: {
      type: DataTypes.STRING
    },
    attendance_time: {
      type: DataTypes.TIME
    },
    idUser_create: {
      type: DataTypes.INTEGER
    },
    idUser_update: {
      type: DataTypes.INTEGER
    },
  } , {
    tableName: 'trx_event_participants',
    timestamps: true
  })
  return trx_event_participant;
};