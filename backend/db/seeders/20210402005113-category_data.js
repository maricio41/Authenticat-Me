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
          businessId: 5,
        },
        {
          type: "Unknown",
          businessId: 6,
        },
        {
          type: "Soul Food",
          businessId: 4,
        },
        {
          type: "Barbeque",
          businessId: 3,
        },
        {
          type: "Seafood",
          businessId: 1,
        },
        {
          type: "Steakhouse",
          businessId: 2,
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete("Categories", null, {});
  },
};
