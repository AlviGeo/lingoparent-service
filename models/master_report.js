'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class master_report extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  master_report.init({
    id_reportable: DataTypes.INTEGER,
    reportable_type: DataTypes.STRING,
    id_user: DataTypes.INTEGER,
    report_comment: DataTypes.TEXT,
    idUser_create: DataTypes.INTEGER,
    idUser_update: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'master_report',
  });
  return master_report;
};