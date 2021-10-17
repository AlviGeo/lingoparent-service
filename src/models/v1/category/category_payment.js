'use strict';
module.exports = (sequelize, DataTypes) => {
  const category_payment = sequelize.define('category_payment', {
    id_payment: DataTypes.INTEGER
  }, {});
  category_payment.associate = function(models) {
    // associations can be defined here
  };
  return category_payment;
};