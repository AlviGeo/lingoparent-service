'use strict';
module.exports = (sequelize, DataTypes) => {
  const trx_course_participant = sequelize.define('trx_course_participant', {
    id_tutor: DataTypes.INTEGER,
    id_student: DataTypes.INTEGER,
    id_course: DataTypes.INTEGER,
    sublevel: DataTypes.STRING,
    total_hour: DataTypes.TIME,
    time_attendance: DataTypes.INTEGER
  }, {});
  trx_course_participant.associate = function(models) {
    // associations can be defined here
  };
  return trx_course_participant;
};