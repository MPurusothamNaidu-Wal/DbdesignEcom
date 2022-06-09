'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class merchant_category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      merchant_category.hasMany(models.Category, {
        foreignKey: 'category_id',
        as: 'cid',
      });
      merchant_category.hasMany(models.merchant, {
        foreignKey: 'merchant_id',
        as: 'mid',
      });
    }
  }
  merchant_category.init(
    {
      merchant_id: DataTypes.INTEGER,
      category_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'merchant_category',
    }
  );
  return merchant_category;
};
