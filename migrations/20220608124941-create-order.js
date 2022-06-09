'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      status: {
        allowNull: false,
        type: Sequelize.ENUM('succes', 'failed', 'processing'),
      },
      total: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        default: Date.now(),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        default: Date.now(),
      },
      paymentId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'payments',
          key: 'id',
          as: 'paymentId',
        },
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id',
          as: 'userId',
        },
      },
      useraddressId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'user_addresses',
          key: 'id',
          as: 'useraddressId',
        },
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('orders');
  },
};
