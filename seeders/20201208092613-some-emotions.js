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
        },
        {
          level: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          level: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("emotions", null, {});
  },
};
