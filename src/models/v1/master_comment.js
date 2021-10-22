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
    id_commentable: {
      type: DataTypes.INTEGER
    },
    commentable_type: {
      type: DataTypes.STRING
    },
    id_user: {
      type: DataTypes.INTEGER
    },
    comment: {
      type: DataTypes.TEXT
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
    modelName: 'master_comment',
  });
  return master_comment;
};