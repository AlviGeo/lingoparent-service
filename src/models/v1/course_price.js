'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class course_price extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  course_price.init({
    id_course: {
      type: DataTypes.INTEGER,
    },
    category: {
      type: DataTypes.STRING
    },
    price: {
      type: DataTypes.INTEGER
    },
    price_per_session: {
      type: DataTypes.INTEGER
    },
    idUser_create: {
      type: DataTypes.INTEGER
    },
    idUser_update: {
      type: DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'course_price',
  });
  return course_price;
};