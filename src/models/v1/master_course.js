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
    id_tutor: {
      type: DataTypes.STRING
    },
    id_level: {
      type: DataTypes.INTEGER
    },
    id_sublevel: {
      type: DataTypes.INTEGER
    },
    title: {
      type: DataTypes.STRING
    },
    cover: {
      type: DataTypes.TEXT
    },
    description: {
      type: DataTypes.TEXT
    },
    is_active: {
      type: DataTypes.STRING
    },
    idUser_create: {
      type: DataTypes.INTEGER
    },
    idUser_update: {
      type: DataTypes.INTEGER
    },
  }, {
    sequelize,
    modelName: 'master_course',
  });
  return master_course;
};