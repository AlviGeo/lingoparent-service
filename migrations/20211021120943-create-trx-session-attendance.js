'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('trx_session_attendances', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_session: {
        type: Sequelize.INTEGER
      },
      id_student: {
        type: Sequelize.STRING
      },
      datetime: {
        type: Sequelize.DATE
      },
      attendance: {
        type: Sequelize.STRING
      },
      feedback: {
        type: Sequelize.TEXT
      },
      notes: {
        type: Sequelize.TEXT
      },
      total_score: {
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
    await queryInterface.dropTable('trx_session_attendances');
  }
};