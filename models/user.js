'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      user.hasMany(models.user_card, {
        foreignKey: 'cardId',
        as: 'cardId',
      });
      user.hasMany(models.user_address, {
        foreignKey: 'addressId',
        as: 'addressId',
      });
      user.hasOne(models.cart, {
        foreignKey: 'cartId',
        as: 'cartId',
      });
      user.hasOne(models.order, {
        foreignKey: 'orderId',
        as: 'orderId',
      });
    }
  }
  user.init(
    {
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      mobile: DataTypes.INTEGER,
      email: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'user',
    }
  );
  return user;
};
