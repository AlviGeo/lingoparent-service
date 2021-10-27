'use strict';

module.exports = (sequelize, DataTypes) => {
  const master_event = sequelize.define('master_event', {
    title: {
      type: DataTypes.STRING
    },
    cover: {
      type: DataTypes.TEXT
    },
    description: {
      type: DataTypes.TEXT
    },
    date: {
      type: DataTypes.DATE
    },
    started_at: {
      type: DataTypes.TIME
    },
    finished_at: {
      type: DataTypes.TIME
    },
    price: {
      type: DataTypes.INTEGER
    },
    speaker: {
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
    tableName: 'master_events',
    timestamps: true
  })
  return master_event;
};