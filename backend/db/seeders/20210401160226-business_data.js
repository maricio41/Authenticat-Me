"use strict";
const faker = require("faker");

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
      "Businesses",
      [
        {
          name: "White Lobster",
          photoUrl: "image goes here",
          address1: "1500 Main St",
          address2: "Suite 15",
          city: "Albany",
          state: "Georgia",
          postCode: "31707",
          phoneNumber: "(229)435-1000",
          hours:
            "Monday - Saturday 11am - Midnight, Sunday 12pm - 10pm Eastern",
          bizUrl: "http://www.whitelobster.com",
          yearsInBusiness: 15,
          categoryId: 5,
        },
        {
          name: "Blooming Onion",
          photoUrl: "image goes here",
          address1: "1357 N Blaylock St",
          address2: "Suite 155",
          city: "Albany",
          state: "Georgia",
          postCode: "31709",
          phoneNumber: "(229)555-3300",
          hours:
            "Monday - Saturday 11am - Midnight, Sunday 12pm - 10pm Eastern",
          bizUrl: "http://wwww.bloomingonion.net",
          yearsInBusiness: 65,
          categoryId: 6,
        },
        {
          name: "Cuthbert Jenkin's Famous BBQ",
          photoUrl: "image goes here",
          address1: "225 N. Slappey Blvd",
          address2: "",
          city: "Albany",
          state: "Georgia",
          postCode: "31701",
          phoneNumber: "(229)881-3000",
          hours: "Monday - Saturday 10am - 10pm Eastern, Sunday Closed",
          bizUrl: "http://cuthbertsque.io",
          yearsInBusiness: 2,
          categoryId: 4,
        },
        {
          name: "Jackie's Soul Food Eatery",
          photoUrl: "image goes here",
          address1: "1660 Sunny ln",
          address2: "Suite 41",
          city: "Albany",
          state: "Georgia",
          postCode: "31701",
          phoneNumber: "(229)663-8787",
          hours: "Monday - Saturday 11am - 8pm Eastern, Sunday Closed",
          bizUrl: "http://www.hurricanejackie.com",
          yearsInBusiness: 47,
          categoryId: 3,
        },
        {
          name: "Little Italy",
          photoUrl: "image goes here",
          address1: "2250 Dawson Rd",
          address2: "",
          city: "Albany",
          state: "Georgia",
          postCode: "31707",
          phoneNumber: "(229)446-2444",
          hours: "Monday - Sunday 11am -11pm Eastern",
          bizUrl: "http://wwww.littleitaly.io",
          yearsInBusiness: 5,
          categoryId: 1,
        },
        {
          name: "Glodine's Fried Catfish and Possibly Possum Shack",
          photoUrl: "image goes here",
          address1: "Round Yonder",
          address2: "Parts Unknown",
          city: "Albany",
          state: "Georgia",
          postCode: "31707",
          phoneNumber: "(229)SAY-WHAT",
          hours: "All day, every day!",
          bizUrl: "http://wwww.itbebad.com",
          yearsInBusiness: 200,
          categoryId: 2,
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Businesses", null, {});
  },
};
