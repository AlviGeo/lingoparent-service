'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class master_event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  master_event.init({
    title: {
      type: DataTypes.STRING
    },
    cover: {
      type: DataTypes.TEXT
    },
    description: {
      type: DataTypes.TEXT
    },
    date: {
      type: DataTypes.DATE
    },
    started_at: {
      type: DataTypes.TIME
    },
    finished_at: {
      type: DataTypes.TIME
    },
    price: {
      type: DataTypes.INTEGER
    },
    speaker: {
      type: DataTypes.STRING
    },
    status: {
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
    modelName: 'master_event',
  });
  return master_event;
};