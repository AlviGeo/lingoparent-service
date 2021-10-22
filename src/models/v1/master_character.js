'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class master_character extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  master_character.init({
    character: {
      type: DataTypes.STRING
    },
    photo: {
      type: DataTypes.TEXT
    },
    description: {
      type: DataTypes.TEXT
    },
    idUser_create: {
      type: DataTypes.INTEGER
    },
    idUser_update: {
      type: DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'master_character',
  });
  return master_character;
};