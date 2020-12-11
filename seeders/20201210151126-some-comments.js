"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "comments",
      [
        {
          content: "You can do this!",
          date: "2020-12-08",
          userId: 1,
          userEmotionId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content: "Can I help in any way?",
          date: "2020-12-08",
          userId: 3,
          userEmotionId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content: "Happy for you, keep up the good work!",
          date: "2020-12-08",
          userId: 2,
          userEmotionId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("comments", null, {});
  },
};
