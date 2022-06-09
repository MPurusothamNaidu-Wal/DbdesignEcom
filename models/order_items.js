'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class order_items extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      order_items.belongsTo(models.order, {
        foreignKey: 'orderId',
      });
      order_items.belongsTo(models.product, {
        foreignKey: 'product_id',
      });
    }
  }
  order_items.init(
    {
      qunatity: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'order_items',
    }
  );
  return order_items;
};
