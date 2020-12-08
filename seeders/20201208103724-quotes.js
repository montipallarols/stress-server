'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "quotes",
      [
        {
          quote: "It's not at all important to get it right the first time. It's vitally important to get it right the last time.",
          emotionId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Experience is the name everyone gives to their mistakes.",
          emotionId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Simplicity is the soul of efficiency.",
          emotionId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "A good programmer is someone who always looks both ways before crossing a one-way street.",
          emotionId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Don’t worry if it doesn’t work right. If everything did, you’d be out of a job.",
          emotionId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "The harder you work for something, the greater you’ll feel when you achieve it.",
          emotionId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.",
          emotionId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("quotes", null, {});
  }
};
