'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class option extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      option.belongsTo(models.delivery, {
        foreignKey: 'deliveryId',
        as: 'deliveryId',
      });
    }
  }
  option.init(
    {
      reason: DataTypes.STRING,
      status: DataTypes.STRING,
      type: DataTypes.ENUM('return', 'exchange'),
    },
    {
      sequelize,
      modelName: 'option',
    }
  );
  return option;
};
