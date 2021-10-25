'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class master_parent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  master_parent.init({
    id_occupation: {
      type: DataTypes.INTEGER
    },
    fullname: {
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
      type: DataTypes.INTEGER,
      default: new Date()
    },
    idUser_update: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
  }, {
    sequelize,
    modelName: 'master_parent',
  });
  return master_parent;
};