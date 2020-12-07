"use strict";
const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = require("../config/constants");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          firstName: "Bas",
          lastName: "Koekkoek",
          email: "bas@fake.com",
          phone: "0611240400",
          password: bcrypt.hashSync("abc", SALT_ROUNDS),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Montaga",
          lastName: "Pallarols",
          email: "monti@fake.com",
          phone: "0645372897",
          password: bcrypt.hashSync("abc", SALT_ROUNDS),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Jur",
          lastName: "van Toledo",
          email: "jur@fake.com",
          phone: "0645839245",
          password: bcrypt.hashSync("abc", SALT_ROUNDS),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
