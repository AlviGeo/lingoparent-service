'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('master_courses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_tutor: {
        type: Sequelize.STRING
      },
      id_level: {
        type: Sequelize.INTEGER
      },
      id_sublevel: {
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      cover: {
        type: Sequelize.TEXT
      },
      description: {
        type: Sequelize.TEXT
      },
      is_active: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('master_courses');
  }
};