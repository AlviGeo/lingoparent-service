'use strict';

module.exports = (sequelize, DataTypes) => {
  const master_comment = sequelize.define('master_comment', {
    id_commentable: {
      type: DataTypes.INTEGER
    },
    commentable_type: {
      type: DataTypes.STRING
    },
    id_user: {
      type: DataTypes.INTEGER
    },
    comment: {
      type: DataTypes.TEXT
    },
    total_like: {
      type: DataTypes.INTEGER
    },
    total_dislike: {
      type: DataTypes.INTEGER
    },
    total_report: {
      type: DataTypes.INTEGER
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
    tableName: 'master_comments',
    timestamps: true
  })
  return master_comment;
};