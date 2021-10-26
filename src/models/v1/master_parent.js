'use strict';

module.exports = (sequelize, DataTypes) => {
  const master_parent = sequelize.define('master_parent', {
    id_occupation: {
      type: DataTypes.INTEGER
    },
    fullname: {
      type: DataTypes.STRING
    },
    lastname: {
      type: DataTypes.STRING
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
      type: DataTypes.INTEGER,
      default: new Date()
    },
    idUser_update: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
  }, {
    tableName: 'master_parent',
    timestamps: true
  });

  return master_parent;
};