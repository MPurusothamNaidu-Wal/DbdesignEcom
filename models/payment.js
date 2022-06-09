'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class payment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      payment.hasOne(models.order, {
        foreignKey: 'paymentId',
      });
    }
  }
  payment.init(
    {
      status: DataTypes.ENUM('success', 'pending', 'failed'),
      type: DataTypes.ENUM('card', 'upi', 'cod'),
      transaction_id: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'payment',
    }
  );
  return payment;
};
