'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class userEmotion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      userEmotion.hasOne(models.emotion);
      userEmotion.belongsTo(models.user);
    }
  };
  userEmotion.init({
    level: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    needHelp: DataTypes.BOOLEAN,
    date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'userEmotion',
  });
  return userEmotion;
};