'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('deliveries', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      deliverydate: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      status: {
        type: Sequelize.ENUM('delivered', 'out_for_delivery', 'not_delivered'),
      },
      shippingloc: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('deliveries');
  },
};
