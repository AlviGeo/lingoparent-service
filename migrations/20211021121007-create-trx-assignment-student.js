'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('trx_assignment_students', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_session_assignment: {
        type: Sequelize.INTEGER
      },
      id_session: {
        type: Sequelize.INTEGER
      },
      id_tutor: {
        type: Sequelize.STRING
      },
      id_student: {
        type: Sequelize.STRING
      },
      student_answer: {
        type: Sequelize.TEXT
      },
      score: {
        type: Sequelize.INTEGER
      },
      feedback: {
        type: Sequelize.TEXT
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
    await queryInterface.dropTable('trx_assignment_students');
  }
};