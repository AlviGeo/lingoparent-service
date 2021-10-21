'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class master_student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  master_student.init({
    id_character: DataTypes.INTEGER,
    id_level: DataTypes.INTEGER,
    id_sublevel: DataTypes.INTEGER,
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    phone: DataTypes.STRING,
    address: DataTypes.STRING,
    gender: DataTypes.STRING,
    date_birth: DataTypes.DATE,
    photo: DataTypes.TEXT,
    is_active: DataTypes.STRING,
    idUser_create: DataTypes.INTEGER,
    idUser_update: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'master_student',
  });
  return master_student;
};