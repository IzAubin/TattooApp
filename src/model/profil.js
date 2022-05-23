const { sequelize } = require('./db.js');
let db = require('./db.js');

const Profil = db.sequelize.define('profil', {

    Id_profil: {
        autoIncrement: true,
        primaryKey: true,
        type: db.Sequelize.INTEGER
    },

    Nom_profil: {
        type: db.Sequelize.STRING,
        notEmpty: true
    },

    Etat_profil:{
        type: db.Sequelize.ENUM('A', 'I'),
        defaultValue: 'A'
    },

});

module.exports = Profil;