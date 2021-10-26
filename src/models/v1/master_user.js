'use strict';

module.exports = (sequelize, DataTypes) => {
  const master_user = sequelize.define('User', {
    id_account: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING
    },
    role: {
      type: DataTypes.STRING
    },
    idUser_create: {
      type: DataTypes.INTEGER
    },
    idUser_update: {
      type: DataTypes.INTEGER
    },
  }, {
    tableName: 'master_user',
    timestamps: true
  });

  return master_user;
};