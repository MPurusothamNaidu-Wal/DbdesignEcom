'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user_card extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      user_card.belongsTo(models.user, {
        foreignKey: 'userId',
      });
    }
  }
  user_card.init(
    {
      card_details: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'user_card',
    }
  );
  return user_card;
};
