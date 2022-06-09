'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      order.belongsTo(models.user);
      order.belongsTo(models.user_address, {
        foreignKey: 'user_addressid',
      });
      order.belongsTo(models.payment, {
        foreignKey: 'payment_id',
      });
      order.hasMany(models.order_items, {
        foreignKey: 'order_itemsid',
        as: 'order_itemsid',
      });
    }
  }
  order.init(
    {
      status: DataTypes.ENUM('succes', 'failed', 'processing'),
      total: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'order',
    }
  );
  return order;
};
