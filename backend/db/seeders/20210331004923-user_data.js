"use strict";
const bcrypt = require("bcryptjs");

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          firstName: "Demo",
          lastName: "Lition",
          email: "demo@user.io",
          userName: "Demo-lition",
          hashedPassword: bcrypt.hashSync("password"),
          avatarUrl: "🚉",
        },
        {
          firstName: "Buck",
          lastName: "Johnson",
          email: "buck@johson.io",
          userName: "buckJ",
          hashedPassword: bcrypt.hashSync("password"),
          avatarUrl: "🚉",
        },
        {
          firstName: "Heraldo",
          lastName: "Pittman",
          email: "therealheraldo@buckwheat.io",
          userName: "heraDo5",
          hashedPassword: bcrypt.hashSync("password"),
          avatarUrl: "🚉",
        },
        {
          firstName: "B A",
          lastName: "Barracus",
          email: "ipitythefool@youbetterrun.net",
          userName: "painTrainB",
          hashedPassword: bcrypt.hashSync("password"),
          avatarUrl: "🚉",
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
