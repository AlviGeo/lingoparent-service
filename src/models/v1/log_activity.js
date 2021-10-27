'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const log_activity = sequelize.define('log_activity', {
    log_date: {
      type: DataTypes.DATE
    },
    log_class: {
      type: DataTypes.TEXT
    },
    log_function: {
      type: DataTypes.STRING
    },
    id_user: {
      type: DataTypes.INTEGER
    },
    fullname: {
      type: DataTypes.STRING
    },
    role: {
      type: DataTypes.STRING
    },
    log_ip: {
      type: DataTypes.STRING
    },
    log_browser: {
      type: DataTypes.TEXT
    },
    log_url: {
      type: DataTypes.TEXT
    },
    log_var_get: {
      type: DataTypes.TEXT
    },
    log_var_post: {
      type: DataTypes.TEXT
    }
  }, {
    tableName: 'log_activity',
    timestamps: true
  })
  return log_activity;
};