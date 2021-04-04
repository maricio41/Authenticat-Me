"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Businesses", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(100),
      },
      photoUrl: {
        allowNull: false,
        type: Sequelize.STRING(255),
      },

      address1: {
        allowNull: false,
        type: Sequelize.STRING(200),
      },
      address2: {
        type: Sequelize.STRING(200),
      },
      city: {
        allowNull: false,
        type: Sequelize.STRING(30),
      },
      state: {
        allowNull: false,
        type: Sequelize.STRING(30),
      },
      postCode: {
        allowNull: false,
        type: Sequelize.STRING(10),
      },
      phoneNumber: {
        allowNull: false,
        type: Sequelize.STRING(20),
        unique: true,
      },
      hours: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      bizUrl: {
        allowNull: false,
        type: Sequelize.STRING(255),
        unique: true,
      },
      yearsInBusiness: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      categoryId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { models: "Categories" },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("now"),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("now"),
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Businesses");
  },
};


"use strict";
module.exports = (sequelize, DataTypes) => {
  const Business = sequelize.define(
    "Business",
    {
      name: DataTypes.STRING,
      photoUrl: DataTypes.STRING,
      address1: DataTypes.STRING,
      address2: DataTypes.STRING,
      city: DataTypes.STRING,
      state: DataTypes.STRING,
      postCode: DataTypes.STRING,
      phoneNumber: DataTypes.STRING,
      hours: DataTypes.TEXT,
      bizUrl: DataTypes.STRING,
      yearsInBusiness: DataTypes.INTEGER,
    },
    {}
  );
  Business.associate = function (models) {
    Business.belongsTo(models.Category, { foreignKey: "categoryId" });
    Business.hasMany(models.Review, { foreignKey: "businessId" });
    Business.hasMany(models.BizPhoto, { foreignKey: "businessId" });
  };
  return Business;
};
