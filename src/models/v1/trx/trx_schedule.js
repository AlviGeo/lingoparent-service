'use strict';
module.exports = (sequelize, DataTypes) => {
  const trx_schedule = sequelize.define('trx_schedule', {
    id_course_participant: DataTypes.INTEGER,
    name_session: DataTypes.STRING,
    description: DataTypes.STRING,
    date: DataTypes.DATE,
    duration: DataTypes.TIME
  }, {});
  trx_schedule.associate = function(models) {
    // associations can be defined here
  };
  return trx_schedule;
};