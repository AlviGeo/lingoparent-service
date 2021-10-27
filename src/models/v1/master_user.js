'use strict';

module.exports = (sequelize, DataTypes) => {
  const master_user = sequelize.define('master_user', {
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
      type: DataTypes.STRING,
      defaultValue: 'parent'
    },
    idUser_create: {
      type: DataTypes.INTEGER
    },
    idUser_update: {
      type: DataTypes.INTEGER
    },
  }, {
    tableName: 'master_users',
    timestamps: true
  });

  

  return master_user;
};