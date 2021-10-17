'use strict';
module.exports = (sequelize, DataTypes) => {
  const category_course = sequelize.define('category_course', {
    id_level: DataTypes.INTEGER,
    title: DataTypes.STRING,
    cover: DataTypes.STRING,
    description: DataTypes.TEXT,
    is_active: DataTypes.STRING
  }, {});
  category_course.associate = function(models) {
    // associations can be defined here
  };
  return category_course;
};