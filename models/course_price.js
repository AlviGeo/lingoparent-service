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
    id_course: DataTypes.INTEGER,
    category: DataTypes.STRING,
    price: DataTypes.INTEGER,
    price_per_session: DataTypes.INTEGER,
    idUser_create: DataTypes.INTEGER,
    idUser_update: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'course_price',
  });
  return course_price;
};