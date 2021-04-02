"use strict";

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
      "Categories",
      [
        {
          type: "Italian",
          businessTypeId: 5,
        },
        {
          type: "Unknown",
          businessTypeId: 6,
        },
        {
          type: "Soul Food",
          businessTypeId: 4,
        },
        {
          type: "Barbeque",
          businessTypeId: 3,
        },
        {
          type: "Seafood",
          businessTypeId: 1,
        },
        {
          type: "Steakhouse",
          businessTypeId: 2,
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Categories", null, {});
  },
};
