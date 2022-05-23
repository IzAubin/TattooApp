const { sequelize } = require('./db.js');
let db = require('./db.js');

const Consentement = db.sequelize.define('consentement', {

    Id_consentement: {
        autoIncrement: true,
        primaryKey: true,
        type: db.Sequelize.INTEGER
    },

    Id_Projet: {
        type: db.Sequelize.INTEGER,
        notEmpty: true
    },

    Image_consentement: {
        type: db.Sequelize.STRING,
        notEmpty: true
    }
});

module.exports = Consentement;