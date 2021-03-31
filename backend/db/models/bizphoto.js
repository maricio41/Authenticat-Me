'use strict';
module.exports = (sequelize, DataTypes) => {
  const BizPhoto = sequelize.define('BizPhoto', {
    userId: DataTypes.INTEGER,
    businessId: DataTypes.INTEGER
  }, {});
  BizPhoto.associate = function(models) {
    // associations can be defined here
  };
  return BizPhoto;
};