'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const master_course_session = sequelize.define('master_course_session', {
    id_course: {
      type: DataTypes.INTEGER
    },
    id_tutor: {
      type: DataTypes.STRING
    },
    name_session: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
    },
    file: {
      type: DataTypes.TEXT
    },
    datetime: {
      type: DataTypes.DATE
    },
    duration: {
      type: DataTypes.TIME
    },
    idUser_create: {
      type: DataTypes.INTEGER
    },
    idUser_update: {
      type: DataTypes.INTEGER
    },
  }, {
    tableName: 'master_course_session',
    timestamps: true
  })
  return master_course_session;
};