'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('master_parents', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_occupation: {
        type: Sequelize.INTEGER
      },
      fullname: {
        type: Sequelize.STRING
      },
      lastname: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.STRING
      },
      date_birth: {
        type: Sequelize.DATE
      },
      photo: {
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
    await queryInterface.dropTable('master_parents');
  }
};