'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('master_insights', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cover: {
        type: Sequelize.TEXT
      },
      title: {
        type: Sequelize.STRING
      },
      content: {
        type: Sequelize.TEXT
      },
      total_views: {
        type: Sequelize.INTEGER
      },
      total_like: {
        type: Sequelize.INTEGER
      },
      total_dislike: {
        type: Sequelize.INTEGER
      },
      total_report: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('master_insights');
  }
};