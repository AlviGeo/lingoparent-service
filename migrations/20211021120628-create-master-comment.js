'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('master_comments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_commentable: {
        type: Sequelize.INTEGER
      },
      commentable_type: {
        type: Sequelize.STRING
      },
      id_user: {
        type: Sequelize.INTEGER
      },
      comment: {
        type: Sequelize.TEXT
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
    await queryInterface.dropTable('master_comments');
  }
};