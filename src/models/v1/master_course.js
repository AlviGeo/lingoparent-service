'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const master_course = sequelize.define('master_course', {
    id_tutor: {
      type: DataTypes.STRING
    },
    id_level: {
      type: DataTypes.INTEGER
    },
    id_sublevel: {
      type: DataTypes.INTEGER
    },
    title: {
      type: DataTypes.STRING
    },
    cover: {
      type: DataTypes.TEXT
    },
    description: {
      type: DataTypes.TEXT
    },
    is_active: {
      type: DataTypes.STRING
    },
    idUser_create: {
      type: DataTypes.INTEGER
    },
    idUser_update: {
      type: DataTypes.INTEGER
    },
  }, {
    tableName: 'master_courses',
    timestamps: true
  })
  return master_course;
};