const { sequelize } = require('./db.js');
let db = require('./db.js');

const TattoFinale = db.sequelize.define('tatto_finale', {

    Id_tatto_finale: {
        autoIncrement: true,
        primaryKey: true,
        type: db.Sequelize.INTEGER
    },

    Id_Projet: {
        type: db.Sequelize.INTEGER,
        notEmpty: true
    },

    Image_tatto_finale: {
        type: db.Sequelize.STRING,
        notEmpty: true
    }

});

module.exports = TattoFinale;