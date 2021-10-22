'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class trx_session_schedule extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  trx_session_schedule.init({
    id_course: {
      type: DataTypes.INTEGER
    },
    id_session: {
      type: DataTypes.INTEGER
    },
    id_tutor: {
      type: DataTypes.STRING
    },
    datetime: {
      type: DataTypes.DATE
    },
    idUser_create: {
      type: DataTypes.INTEGER
    },
    idUser_update: {
      type: DataTypes.INTEGER
    },
  }, {
    sequelize,
    modelName: 'trx_session_schedule',
  });
  return trx_session_schedule;
};