const { sequelize } = require('./db.js');
let db = require('./db.js');

const Typeart = db.sequelize.define('typeart', {

    // Id_aiguille: {
    //     autoIncrement: true,
    //     primaryKey: true,
    //     type: db.Sequelize.INTEGER
    // },
    
    id_typeart: {
        autoIncrement: true,
        primaryKey: true,
        type: db.Sequelize.INTEGER
    },

    // Id_Projet: {
    //     type: db.Sequelize.INTEGER,
    //     notEmpty: true
    // },

    // Image_aiguille: {
    //     type: db.Sequelize.STRING,
    //     notEmpty: true
    // },

    nom_typeart: {
        type: db.Sequelize.STRING,
        notEmpty: true
    },

    Enable:{
       type: db.Sequelize.ENUM('A', 'I'),
       defaultValue: 'A'
    }
});

module.exports = Typeart;

/* A VOIR S'IL VOUS PLAIT, SE FICHIER FAIT PAS DE SENS. LES COMMENTAIRES SONT LES "NOUVEAU CHANGEMENTS" mais ils semblent avoir à faire avec des aiguilles et non des type de art */