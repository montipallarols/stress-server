"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "userEmotions",
      [
        {
          level: 3,
          description:
            "I feel great today, loving React Native and can't wait to build something cool with it!",
          needHelp: false,
          date: "2020-12-08",
          userId: 1,
          emotionId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          level: 1,
          description:
            "I feel really stressed today. I've been struggling with React Native all day, I just can't get it to work!",
          needHelp: true,
          date: "2020-12-08",
          userId: 2,
          emotionId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          level: 2,
          description:
            "I'm feeling alright. React Native seems cool so far, I guess I just need to keep practising it more.",
          needHelp: false,
          date: "2020-12-08",
          userId: 3,
          emotionId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("userEmotions", null, {});
  },
};
