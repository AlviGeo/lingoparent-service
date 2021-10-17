'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('trx_course_participants', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_tutor: {
        type: Sequelize.INTEGER
      },
      id_student: {
        type: Sequelize.INTEGER
      },
      id_course: {
        type: Sequelize.INTEGER
      },
      sublevel: {
        type: Sequelize.STRING
      },
      total_hour: {
        type: Sequelize.TIME
      },
      time_attendance: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('trx_course_participants');
  }
};