"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("comments", "userId", {
      type: Sequelize.INTEGER,
      references: {
        model: "users",
        key: "id",
      },
    });
    await queryInterface.addColumn("comments", "userEmotionId", {
      type: Sequelize.INTEGER,
      references: {
        model: "userEmotions",
        key: "id",
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("comments", "userId");
    await queryInterface.removeColumn("comments", "userEmotionId");
  },
};
