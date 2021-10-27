'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const trx_parent_relations = sequelize.define('trx_parent_relations', {
    id_student: {
      type: DataTypes.STRING
    },
    id_parent: {
      type: DataTypes.STRING
    },
    parent_relationship: {
      type: DataTypes.STRING
    },
    status: {
      type: DataTypes.STRING
    },
    idUser_create: {
      type: DataTypes.INTEGER
    },
    idUser_update: {
      type: DataTypes.INTEGER
    },
  }, {
    tableName: 'trx_parent_relations',
    timestamps: true
  })
  return trx_parent_relations;
};