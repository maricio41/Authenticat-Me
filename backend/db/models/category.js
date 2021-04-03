"use strict";
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define(
    "Category",
    {
      type: DataTypes.STRING,
    },
    {}
  );
  Category.associate = function (models) {
    Category.hasMany(models.Business, { foreignKey: "categoryId" });
  };
  return Category;
};
