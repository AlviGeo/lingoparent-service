'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('master_course_sessions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_course: {
        type: Sequelize.INTEGER
      },
      id_tutor: {
        type: Sequelize.STRING
      },
      name_session: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      file: {
        type: Sequelize.TEXT
      },
      datetime: {
        type: Sequelize.DATE
      },
      duration: {
        type: Sequelize.TIME
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
    await queryInterface.dropTable('master_course_sessions');
  }
};