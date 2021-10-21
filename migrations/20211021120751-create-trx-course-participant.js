'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('trx_course_participants', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_student: {
        type: Sequelize.STRING
      },
      id_course: {
        type: Sequelize.INTEGER
      },
      total_hour: {
        type: Sequelize.TIME
      },
      overall_feedback: {
        type: Sequelize.TEXT
      },
      overall_score: {
        type: Sequelize.INTEGER
      },
      idUser_create: {
        type: Sequelize.INTEGER
      },
      idUser_update: {
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('trx_course_participants');
  }
};