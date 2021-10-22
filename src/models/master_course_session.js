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
    id_course: DataTypes.INTEGER,
    id_tutor: DataTypes.STRING,
    name_session: DataTypes.STRING,
    description: DataTypes.STRING,
    file: DataTypes.TEXT,
    datetime: DataTypes.DATE,
    duration: DataTypes.TIME,
    idUser_create: DataTypes.INTEGER,
    idUser_update: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'master_course_session',
  });
  return master_course_session;
};