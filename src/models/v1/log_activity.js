'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class log_activity extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  log_activity.init({
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
    sequelize,
    modelName: 'log_activity',
  });
  return log_activity;
};