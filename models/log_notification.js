'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class log_notification extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  log_notification.init({
    notif_date: DataTypes.DATE,
    notif_class: DataTypes.TEXT,
    notif_message: DataTypes.TEXT,
    id_user: DataTypes.INTEGER,
    fullname: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'log_notification',
  });
  return log_notification;
};