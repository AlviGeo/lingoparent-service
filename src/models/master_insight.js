'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class master_insight extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  master_insight.init({
    cover: DataTypes.TEXT,
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    total_views: DataTypes.INTEGER,
    total_like: DataTypes.INTEGER,
    total_dislike: DataTypes.INTEGER,
    total_report: DataTypes.INTEGER,
    is_active: DataTypes.STRING,
    idUser_create: DataTypes.INTEGER,
    idUser_update: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'master_insight',
  });
  return master_insight;
};