'use strict';

module.exports = (sequelize, DataTypes) => {
  const master_character = sequelize.define('master_character', {
    character: {
      type: DataTypes.STRING
    },
    photo: {
      type: DataTypes.TEXT
    },
    description: {
      type: DataTypes.TEXT
    },
    idUser_create: {
      type: DataTypes.INTEGER
    },
    idUser_update: {
      type: DataTypes.INTEGER
    }
  }, {
    tableName: 'master_characters',
    timestamps: true
  })
  return master_character;
};