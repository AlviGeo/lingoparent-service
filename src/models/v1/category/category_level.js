'use strict';
module.exports = (sequelize, DataTypes) => {
  const category_level = sequelize.define('category_level', {
    name: DataTypes.STRING,
    level: DataTypes.INTEGER
  }, {});
  category_level.associate = function(models) {
    // associations can be defined here
  };
  return category_level;
};