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
    cover: {
      type: DataTypes.TEXT
    },
    title: {
      type: DataTypes.STRING
    },
    content: {
      type: DataTypes.TEXT
    },
    total_views: {
      type: DataTypes.INTEGER
    },
    total_like: {
      type: DataTypes.INTEGER
    },
    total_dislike: {
      type: DataTypes.INTEGER
    },
    total_report: {
      type: DataTypes.INTEGER
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
    modelName: 'master_insight',
  });
  return master_insight;
};