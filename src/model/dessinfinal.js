const { sequelize } = require('./db.js');
let db = require('./db.js');

const Dessinfinal = db.sequelize.define('dessinfinal', {

    Id_dessinfinal: {
        autoIncrement: true,
        primaryKey: true,
        type: db.Sequelize.INTEGER
    },

    Id_Projet: {
        type: db.Sequelize.INTEGER,
        notEmpty: true
    },

    Nom_dessin: {
        type: db.Sequelize.STRING,
        notEmpty: true
    },

    Image_finale: {
        type: db.Sequelize.STRING,
        notEmpty: true
    }
});

module.exports = Dessinfinal;