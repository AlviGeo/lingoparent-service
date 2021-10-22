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
    log_date: DataTypes.DATE,
    log_class: DataTypes.TEXT,
    log_function: DataTypes.STRING,
    id_user: DataTypes.INTEGER,
    fullname: DataTypes.STRING,
    role: DataTypes.STRING,
    log_ip: DataTypes.STRING,
    log_browser: DataTypes.TEXT,
    log_url: DataTypes.TEXT,
    log_var_get: DataTypes.TEXT,
    log_var_post: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'log_activity',
  });
  return log_activity;
};