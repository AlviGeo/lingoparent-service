'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class trx_event_participant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  trx_event_participant.init({
    id_event: {
      type: DataTypes.INTEGER
    },
    id_user: {
      type: DataTypes.INTEGER
    },
    fullname: {
      type: DataTypes.STRING
    },
    phone: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    },
    attendance: {
      type: DataTypes.STRING
    },
    attendance_time: {
      type: DataTypes.TIME
    },
    idUser_create: {
      type: DataTypes.INTEGER
    },
    idUser_update: {
      type: DataTypes.INTEGER
    },
  }, {
    sequelize,
    modelName: 'trx_event_participant',
  });
  return trx_event_participant;
};