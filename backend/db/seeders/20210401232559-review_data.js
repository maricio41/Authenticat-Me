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
      "Reviews",
      [
        {
          content:
            "The food was excellent and we really enjoyed the live band.",
          rating: 5,
          userId: 1,
          businessId: 1,
        },
        {
          content: "Oooowheeee! That girl Jackie know she can cook!",
          rating: 5,
          userId: 3,
          businessId: 4,
        },
        {
          content: "Decent BBQ, slow service, but a good price.",
          rating: 3,
          userId: 4,
          businessId: 3,
        },
        {
          content: "Someone dial 911",
          rating: 1,
          userId: 2,
          businessId: 6,
        },
        {
          content:
            "Possum is where its at! What an exciting atmosphere. The dude with the chainsaw really got my heart pumping. Excellent catfish!",
          rating: 5,
          userId: 3,
          businessId: 6,
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Reviews", null, {});
  },
};
