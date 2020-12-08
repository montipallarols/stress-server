'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "reflections",
      [
        {
          date: "2020-12-08",
          problem: "I couldn't get the navigation to work at first.",
          solution: "I managed to fix it by looking at the documentation.",
          score: 9,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          date: "2020-12-08",
          problem: "I struggled with React Native and with getting the Dev Tools to work.",
          solution: "After trying all sorts of things and still nothing seemed to work, I took a short break. Then after talking to my classmates everything seemed much clearer.",
          score: 7,
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          date: "2020-12-08",
          problem: "I didn't like React Native at first",
          solution: "After some practice I ended up loving it!",
          score: 8,
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("reflections", null, {});
  }
};
