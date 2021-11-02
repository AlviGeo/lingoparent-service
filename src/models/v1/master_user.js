'use strict';

module.exports = (sequelize, DataTypes) => {
  const master_user = sequelize.define('master_user', {
    id: {
      type: DataTypes.INTEGER,        
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
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
    createdAt: {        
      type: DataTypes.DATE,
      allowNull: false
    },
    updatedAt: {        
      type: DataTypes.DATE
    }
  }, {
    tableName: 'master_users',
    timestamps: true
  });

  

  return master_user;
};