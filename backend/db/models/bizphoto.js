"use strict";

const business = require("./business");

module.exports = (sequelize, DataTypes) => {
  const BizPhoto = sequelize.define(
    "BizPhoto",
    {
      userId: DataTypes.INTEGER,
      businessId: DataTypes.INTEGER,
    },
    {}
  );
  BizPhoto.associate = function (models) {
    BizPhoto.belongsTo(models.Business, { foreignKey: "businessId" });
  };
  return BizPhoto;
};
