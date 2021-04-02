"use strict";
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define(
    "Category",
    {
      type: DataTypes.STRING,
      businessTypeId: DataTypes.INTEGER,
    },
    {}
  );
  Category.associate = function (models) {
    Category.hasOne(models.Business, { foreignKey: "businessTypeId" });
  };
  return Category;
};
