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
    sequelize,
    modelName: 'log_notification',
  });
  return log_notification;
};