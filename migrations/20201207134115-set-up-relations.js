"use strict";

const { sequelize } = require("../models");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("reflections", "userId", {
      type: Sequelize.INTEGER,
      references: {
        model: "users",
        key: "id",
      },
    });
    await queryInterface.addColumn("userEmotions", "userId", {
      type: Sequelize.INTEGER,
      references: {
        model: "users",
        key: "id",
      },
    });
    await queryInterface.addColumn("userEmotions", "emotionId", {
      type: Sequelize.INTEGER,
      references: {
        model: "emotions",
        key: "id",
      },
    });
    await queryInterface.addColumn("quotes", "emotionId", {
      type: Sequelize.INTEGER,
      references: {
        model: "emotions",
        key: "id",
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("reflections", "userId"),
      await queryInterface.removeColumn("userEmotions", "userId"),
      await queryInterface.removeColumn("userEmotions", "emotionId"),
      await queryInterface.removeColumn("quotes", "emotionId");
  },
};
