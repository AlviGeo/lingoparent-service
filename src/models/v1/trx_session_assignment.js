'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const trx_session_assignment = sequelize.define('trx_session_assignment', {
    id_session: {
      type: DataTypes.INTEGER
    },
    question: {
      type: DataTypes.TEXT
    },
    answer: {
      type: DataTypes.TEXT
    },
    idUser_create: {
      type: DataTypes.INTEGER
    },
    idUser_update: {
      type: DataTypes.INTEGER
    },
  }, {
    tableName: 'trx_session_assignments',
    timestamps: true
  })
  return trx_session_assignment;
};