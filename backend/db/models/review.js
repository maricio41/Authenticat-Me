"use strict";
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define(
    "Review",
    {
      content: DataTypes.TEXT,
      rating: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
      businessId: DataTypes.INTEGER,
    },
    {}
  );
  Review.associate = function (models) {
    Review.belongsTo(models.User, { foreignKey: "userId" });
  };
  return Review;
};
