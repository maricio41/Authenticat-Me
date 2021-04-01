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
      "Businesses",
      [
        {
          name: "White Lobster",
          address1: "1500 Main St",
          address2: "Suite 15",
          city: "Albany",
          state: "Georga",
          postCode: "31707",
          phoneNumber: "(229)435-1000",
          hours:
            "Monday - Saturday 11am - Midnight, Sunday 12pm - 10pm Eastern",
          bizUrl: "http://whitelobster.com",
          yearsInBusiness: 15,
        },
        {
          name: "Blooming Onion",
          address1: "1357 N Blaylock St",
          address2: "Suite 155",
          city: "Albany",
          state: "Georga",
          postCode: "31709",
          phoneNumber: "(229)555-3300",
          hours:
            "Monday - Saturday 11am - Midnight, Sunday 12pm - 10pm Eastern",
          bizUrl: "http://bloomingonion.net",
          yearsInBusiness: 65,
        },
        {
          name: "Cuthbert Jenkin's Famous BBQ",
          address1: "225 N. Slappey Blvd",
          address2: "",
          city: "Albany",
          state: "Georga",
          postCode: "31701",
          phoneNumber: "(229)881-3000",
          hours: "Monday - Saturday 10am - 10pm Eastern, Sunday Closed",
          bizUrl: "http://cuthbertsque.io",
          yearsInBusiness: 2,
        },
        {
          name: "Jackie's Soul Food Eatery",
          address1: "1660 Sunny ln",
          address2: "Suite 41",
          city: "Albany",
          state: "Georga",
          postCode: "31701",
          phoneNumber: "(229)663-8787",
          hours: "Monday - Saturday 11am - 8pm Eastern, Sunday Closed",
          bizUrl: "http://whitelobster.com",
          yearsInBusiness: 47,
        },
        {
          name: "Little Italy",
          address1: "2250 Dawson Rd",
          address2: "",
          city: "Albany",
          state: "Georga",
          postCode: "31707",
          phoneNumber: "(229)446-2444",
          hours: "Monday - Sunday 11am -11pm Eastern",
          bizUrl: "http://littleitaly.io",
          yearsInBusiness: 5,
        },
        {
          name: "Glodine's Fried Catfish and Possibly Possum Shack",
          address1: "Round Yonder",
          address2: "Parts Unknown",
          city: "Albany",
          state: "Georga",
          postCode: "31707",
          phoneNumber: "(229)SAY-WHAT",
          hours: "All day, every day!",
          bizUrl: "http://itbebad.com",
          yearsInBusiness: 200,
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Businesses", null, {});
  },
};
