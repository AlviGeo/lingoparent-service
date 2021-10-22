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
    id_character: {
      type: DataTypes.INTEGER
    },
    id_level: {
      type: DataTypes.INTEGER
    },
    id_sublevel: {
      type: DataTypes.INTEGER
    },
    firstname: {
      type: DataTypes.STRING
    },
    lastname: {
      type: DataTypes.STRING
    },
    phone: {
      type: DataTypes.STRING
    },
    address: {
      type: DataTypes.STRING
    },
    gender: {
      type: DataTypes.STRING
    },
    date_birth: {
      type: DataTypes.DATE
    },
    photo: {
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
    modelName: 'master_student',
  });
  return master_student;
};