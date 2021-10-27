'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const log_notification = sequelize.define('log_notification', {
    notif_date: {
      type: DataTypes.DATE
    },
    notif_class: {
      type: DataTypes.TEXT
    },
    notif_message: {
      type: DataTypes.TEXT
    },
    id_user: {
      type: DataTypes.INTEGER
    },
    fullname: {
      type: DataTypes.STRING
    },
    role: {
      type: DataTypes.STRING
    }
  }, {
    tableName: 'log_notification',
    timestamps: true
  })
  return log_notification;
};