'use strict';

module.exports = (sequelize, DataTypes) => {
  const master_tutor = sequelize.define('Tutor', {
    id_course: {
      type: DataTypes.INTEGER
    },
    firstname: {
      type: DataTypes.STRING
    },
    lastname: {
      type: DataTypes.STRING
    },
    profile_description: {
      type: DataTypes.TEXT
    },
    phone: {
      type: DataTypes.STRING
    },
    address: {
      type: DataTypes.STRING
    },
    gender: {
      type: DataTypes.STRING
    },
    date_birth: {
      type: DataTypes.DATE
    },
    photo: {
      type: DataTypes.TEXT
    },
    is_active: {
      type: DataTypes.STRING
    },
    idUser_create: {
      type: DataTypes.INTEGER
    },
    idUser_update: {
      type: DataTypes.INTEGER
    },
  }, {
    tableName: 'master_tutors',
    timestamps: true
  });
  
  return master_tutor;
};