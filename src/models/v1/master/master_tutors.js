'use strict';
module.exports = (sequelize, DataTypes) => {
  const master_tutors = sequelize.define('master_tutors', {
    id_user: DataTypes.INTEGER,
    fullname: DataTypes.STRING,
    phone: DataTypes.STRING,
    address: DataTypes.STRING,
    gender: DataTypes.STRING,
    date_birth: DataTypes.DATE,
    photo: DataTypes.STRING,
    is_active: DataTypes.STRING
  }, {});
  master_tutors.associate = function(models) {
    // associations can be defined here
  };
  return master_tutors;
};