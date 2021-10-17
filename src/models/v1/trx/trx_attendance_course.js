'use strict';
module.exports = (sequelize, DataTypes) => {
  const trx_attendance_course = sequelize.define('trx_attendance_course', {
    id_schedule: DataTypes.INTEGER,
    attendance: DataTypes.STRING,
    notes: DataTypes.TEXT,
    score: DataTypes.INTEGER
  }, {});
  trx_attendance_course.associate = function(models) {
    // associations can be defined here
  };
  return trx_attendance_course;
};