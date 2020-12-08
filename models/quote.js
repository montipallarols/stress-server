'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class quote extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      quote.belongsTo(models.emotion);
    }
  };
  quote.init({
    quote: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'quote',
  });
  return quote;
};