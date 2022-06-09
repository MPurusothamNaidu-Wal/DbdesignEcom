'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class delivery extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      delivery.hasOne(models.order_items, {
        foreignKey: 'order_itemsid',
        as: 'order_itemsid',
      });
      delivery.hasOne(models.option, {
        foreignKey: 'optionid',
        as: 'optionid',
      });
    }
  }
  delivery.init(
    {
      deliverydate: DataTypes.DATE,
      status: DataTypes.ENUM('delivered', 'out_for_delivery', 'not_delivered'),
      shippingloc: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'delivery',
    }
  );
  return delivery;
};
