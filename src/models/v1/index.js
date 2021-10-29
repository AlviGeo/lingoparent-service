'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../../config/config.js')[env];
const db = {};


let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;


db.master_user = require("./master_user.js")(sequelize, Sequelize)
db.master_student = require("./master_student.js")(sequelize, Sequelize);
db.master_parent = require("./master_parent.js")(sequelize, Sequelize);
db.master_tutor = require("./master_tutor")(sequelize, Sequelize)

db.master_user.hasOne(db.master_student, {
  foreignKey: 'idUser_create',
  targetKey: 'id'
})
db.master_user.hasOne(db.master_parent, {
  foreignKey: 'idUser_create',
  targetKey: 'id'
})
db.master_user.hasOne(db.master_tutor, {
  foreignKey: 'idUser_create',
  targetKey: 'id'
})

db.master_parent.belongsTo(db.master_user, {
    foreignKey: 'idUser_create',
    targetKey: 'id'
})

db.master_student.belongsTo(db.master_user, {
  foreignKey: 'idUser_create',
  targetKey: 'id'
})
db.master_tutor.belongsTo(db.master_user, {
  foreignKey: 'idUser_create',
  targetKey: 'id'
})



module.exports = db;