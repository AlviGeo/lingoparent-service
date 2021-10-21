'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class master_course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  master_course.init({
    id_tutor: DataTypes.STRING,
    id_level: DataTypes.INTEGER,
    id_sublevel: DataTypes.INTEGER,
    title: DataTypes.STRING,
    cover: DataTypes.TEXT,
    description: DataTypes.TEXT,
    is_active: DataTypes.STRING,
    idUser_create: DataTypes.INTEGER,
    idUser_update: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'master_course',
  });
  return master_course;
};