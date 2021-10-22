'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('log_activities', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      log_date: {
        type: Sequelize.DATE
      },
      log_class: {
        type: Sequelize.TEXT
      },
      log_function: {
        type: Sequelize.STRING
      },
      id_user: {
        type: Sequelize.INTEGER
      },
      fullname: {
        type: Sequelize.STRING
      },
      role: {
        type: Sequelize.STRING
      },
      log_ip: {
        type: Sequelize.STRING
      },
      log_browser: {
        type: Sequelize.TEXT
      },
      log_url: {
        type: Sequelize.TEXT
      },
      log_var_get: {
        type: Sequelize.TEXT
      },
      log_var_post: {
        type: Sequelize.TEXT
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
    await queryInterface.dropTable('log_activities');
  }
};