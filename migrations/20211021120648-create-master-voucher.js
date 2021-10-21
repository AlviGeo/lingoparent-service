'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('master_vouchers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      voucher_code: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      discount: {
        type: Sequelize.INTEGER
      },
      category_discount: {
        type: Sequelize.STRING
      },
      category: {
        type: Sequelize.STRING
      },
      total_voucher: {
        type: Sequelize.INTEGER
      },
      valid_from: {
        type: Sequelize.DATE
      },
      valid_until: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('master_vouchers');
  }
};