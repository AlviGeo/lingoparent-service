'use strict';
module.exports = (sequelize, DataTypes) => {
  const master_student = sequelize.define('master_student', {
    id_user: DataTypes.STRING,
    fullname: DataTypes.STRING,
    phone: DataTypes.STRING,
    address: DataTypes.STRING,
    gender: DataTypes.STRING,
    occupation: DataTypes.STRING,
    date_birth: DataTypes.DATE,
    photo: DataTypes.STRING,
    is_active: DataTypes.STRING,
    sublevel: DataTypes.STRING,
    level: DataTypes.STRING
  }, {});
  master_student.associate = function(models) {
    // associations can be defined here
  };
  return master_student;
};