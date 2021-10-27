'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
 const course_price = sequelize.define('course_price', {
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
   tableName: 'course_prices',
   timestamps: true
 })
  return course_price;
};