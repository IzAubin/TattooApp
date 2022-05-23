const { Sequelize, Model, DataTypes } = require("sequelize");
let db = {};

 
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT
});

db.sequelize = sequelize; // instance de base de datos
db.Sequelize = Sequelize; // moteur accessible le charge dans une variable, puis l'utilise dans les modèles.

module.exports = db;
