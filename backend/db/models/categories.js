'use strict';
module.exports = (sequelize, DataTypes) => {
  const Categories = sequelize.define('Categories', {
    type: DataTypes.STRING,
    businessId: DataTypes.INTEGER
  }, {});
  Categories.associate = function(models) {
    // associations can be defined here
  };
  return Categories;
};