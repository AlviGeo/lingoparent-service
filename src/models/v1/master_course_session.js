'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class master_course_session extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  master_course_session.init({
    id_course: {
      type: DataTypes.INTEGER
    },
    id_tutor: {
      type: DataTypes.STRING
    },
    name_session: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
    },
    file: {
      type: DataTypes.TEXT
    },
    datetime: {
      type: DataTypes.DATE
    },
    duration: {
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
    modelName: 'master_course_session',
  });
  return master_course_session;
};