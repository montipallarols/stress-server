"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class emotion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      emotion.belongsTo(models.userEmotion);
      emotion.hasMany(models.quote);
    }
  }
  emotion.init(
    {
      level: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "emotion",
    }
  );
  return emotion;
};
