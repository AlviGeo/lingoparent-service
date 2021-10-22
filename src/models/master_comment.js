'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class master_comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  master_comment.init({
    id_commentable: DataTypes.INTEGER,
    commentable_type: DataTypes.STRING,
    id_user: DataTypes.INTEGER,
    comment: DataTypes.TEXT,
    total_like: DataTypes.INTEGER,
    total_dislike: DataTypes.INTEGER,
    total_report: DataTypes.INTEGER,
    status: DataTypes.STRING,
    idUser_create: DataTypes.INTEGER,
    idUser_update: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'master_comment',
  });
  return master_comment;
};