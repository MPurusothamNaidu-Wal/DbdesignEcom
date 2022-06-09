'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cart_item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      cart_item.hasMany(models.product, {
        foreignKey: 'productId',
        as: 'products',
      });
    }
  }
  cart_item.init(
    {
      quantity: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'cart_item',
    }
  );
  return cart_item;
};
