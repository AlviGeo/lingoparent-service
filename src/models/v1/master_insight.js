'use strict';

module.exports = (sequelize, DataTypes) => {
  const master_insight = sequelize.define('master_insight', {
    cover: {
      type: DataTypes.TEXT
    },
    title: {
      type: DataTypes.STRING
    },
    content: {
      type: DataTypes.TEXT
    },
    total_views: {
      type: DataTypes.INTEGER
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
    tableName: 'master_insights',
    timestamps: true
  })
  return master_insight;
};