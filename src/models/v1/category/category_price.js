'use strict';
module.exports = (sequelize, DataTypes) => {
  const category_price = sequelize.define('category_price', {
    id_course: DataTypes.INTEGER,
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    price_per_session: DataTypes.INTEGER
  }, {});
  category_price.associate = function(models) {
    // associations can be defined here
  };
  return category_price;
};