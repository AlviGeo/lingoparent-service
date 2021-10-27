'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const master_like_dislike = sequelize.define('master_like_dislike', {
    id_likeable: {
      type: DataTypes.INTEGER
    },
    likeable_type: {
      type: DataTypes.STRING
    },
    id_user: {
      type: DataTypes.INTEGER
    },
    is_like: {
      type: DataTypes.STRING
    },
    is_dislike: {
      type: DataTypes.STRING
    },
    idUser_create: {
      type: DataTypes.INTEGER
    },
    idUser_update: {
      type: DataTypes.INTEGER
    },
  }, {
    tableName: 'master_like_dislikes',
    timestamps: true
  })
  return master_like_dislike;
};