"use strict";
module.exports = (sequelize, DataTypes) => {
  const Business = sequelize.define(
    "Business",
    {
      name: DataTypes.STRING,
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
    Business.hasOne(models.Category, { foreignKey: "businessId" });
    Business.hasMany(models.Review, { foreignKey: "businessId" });
    Business.hasMany(models.Photo, { foreignKey: "businessId" });
  };
  return Business;
};
