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
    id_reportable: {
      type: DataTypes.INTEGER
    },
    reportable_type: {
      type: DataTypes.STRING
    },
    id_user: {
      type: DataTypes.INTEGER
    },
    report_comment: {
      type: DataTypes.TEXT
    },
    idUser_create: {
      type: DataTypes.INTEGER
    },
    idUser_update: {
      type: DataTypes.INTEGER
    },
  }, {
    sequelize,
    modelName: 'master_report',
  });
  return master_report;
};