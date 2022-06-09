'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user_address extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      user_address.belongsTo(models.user, {
        foreignKey: 'userId',
      });
      user_address.hasOne(models.order, {
        foreignKey: 'orderid',
      });
    }
  }
  user_address.init(
    {
      address: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'user_address',
    }
  );
  return user_address;
};
