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
        {
          firstName: "Tim",
          lastName: "de Waard",
          email: "tim@waard.com",
          phone: "0698849147",
          password: bcrypt.hashSync("abc", SALT_ROUNDS),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Andreea",
          lastName: "Matei",
          email: "andreea@matei.com",
          phone: "0621939152",
          password: bcrypt.hashSync("abc", SALT_ROUNDS),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Jannis",
          lastName: "Passalis",
          email: "jannis@passalis.com",
          phone: "0644939189",
          password: bcrypt.hashSync("abc", SALT_ROUNDS),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Sjouke",
          lastName: "Bosma",
          email: "sjouke@bosma.com",
          phone: "0656929133",
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
