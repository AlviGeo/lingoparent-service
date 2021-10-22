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
    title: DataTypes.STRING,
    cover: DataTypes.TEXT,
    description: DataTypes.TEXT,
    date: DataTypes.DATE,
    started_at: DataTypes.TIME,
    finished_at: DataTypes.TIME,
    price: DataTypes.INTEGER,
    speaker: DataTypes.STRING,
    status: DataTypes.STRING,
    idUser_create: DataTypes.INTEGER,
    idUser_update: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'master_event',
  });
  return master_event;
};