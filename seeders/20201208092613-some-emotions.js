"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "emotions",
      [
        {
          level: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
          userEmotionId: 1
        },
        {
          level: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
          userEmotionId: 2
        },
        {
          level: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
          userEmotionId: 3
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("emotions", null, {});
  },
};
