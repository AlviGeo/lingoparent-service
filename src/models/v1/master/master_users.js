'use strict';
module.exports = (sequelize, DataTypes) => {
  const master_users = sequelize.define('master_users', {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING
  }, {});
  master_users.associate = function(models) {
    // associations can be defined here
  };
  return master_users;
};