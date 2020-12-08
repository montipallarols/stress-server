'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class reflection extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      reflection.belongsTo(models.user);
    }
  };
  reflection.init({
    date: DataTypes.DATE,
    problem: DataTypes.TEXT,
    solution: DataTypes.TEXT,
    score: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'reflection',
  });
  return reflection;
};