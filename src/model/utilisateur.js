const { sequelize } = require('./db.js');
let db = require('./db.js');

const Utilisateur = db.sequelize.define('utilisateur', {

    Id_utilisateur: {
        autoIncrement: true,
        primaryKey: true,
        type: db.Sequelize.INTEGER
    },

    Id_Artiste: {
        type: db.Sequelize.INTEGER,
        notEmpty: true
    },

    Nom_utilisateur: {
        type: db.Sequelize.STRING,
        notEmpty: true
    },

    Mot_de_passe_utilisateur: {
        type: db.Sequelize.STRING,
        notEmpty: true
    },

    Etat_utilisateur:{
        type: db.Sequelize.ENUM('A', 'I'),
        defaultValue: 'A'
    }
});

module.exports = Utilisateur;