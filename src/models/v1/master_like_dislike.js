'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class master_like_dislike extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  master_like_dislike.init({
    id_likeable: {
      type: DataTypes.INTEGER
    },
    likeable_type: {
      type: DataTypes.STRING
    },
    id_user: {
      type: DataTypes.INTEGER
    },
    is_like: {
      type: DataTypes.STRING
    },
    is_dislike: {
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
    modelName: 'master_like_dislike',
  });
  return master_like_dislike;
};