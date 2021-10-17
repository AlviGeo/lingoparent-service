'use strict';
module.exports = (sequelize, DataTypes) => {
  const category_character = sequelize.define('category_character', {
    id_student: DataTypes.INTEGER,
    character: DataTypes.STRING,
    photo: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {});
  category_character.associate = function(models) {
    // associations can be defined here
  };
  return category_character;
};