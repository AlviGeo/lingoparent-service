'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('master_events', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
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
      date: {
        type: Sequelize.DATE
      },
      started_at: {
        type: Sequelize.TIME
      },
      finished_at: {
        type: Sequelize.TIME
      },
      price: {
        type: Sequelize.INTEGER
      },
      speaker: {
        type: Sequelize.STRING
      },
      status: {
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
    await queryInterface.dropTable('master_events');
  }
};