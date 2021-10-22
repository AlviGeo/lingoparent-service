'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class master_tutor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  master_tutor.init({
    id_course: {
      type: DataTypes.INTEGER
    },
    firstname: {
      type: DataTypes.STRING
    },
    lastname: {
      type: DataTypes.STRING
    },
    profile_description: {
      type: DataTypes.TEXT
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
    modelName: 'master_tutor',
  });
  return master_tutor;
};