const { sequelize } = require('./db.js');
let db = require('./db.js');

const Preprojet = db.sequelize.define('preprojet', {

    id_preprojet: {
        autoIncrement: true,
        primaryKey: true,
        type: db.Sequelize.INTEGER
    },

    id_client: {
        type: db.Sequelize.INTEGER,
        notEmpty: true
    },

    id_artiste: {
        type: db.Sequelize.INTEGER,
        notEmpty: true
    },

    id_part: {
        type: db.Sequelize.INTEGER,
        notEmpty: true
    },

    haut: {
        type: db.Sequelize.INTEGER,
        notEmpty: true
    },

    largeur: {
        type: db.Sequelize.INTEGER,
        notEmpty: true
    },

    description: {
        type: db.Sequelize.STRING,
        notEmpty: true
    },

    prix: {
        type: db.Sequelize.INTEGER, 
        notEmpty: true
    },

    approbation:{
        type: db.Sequelize.STRING,
        notEmpty:true
    },

    Enable:{
        type: db.Sequelize.ENUM('A', 'I'),
        defaultValue: 'A'
    }
});

module.exports = Preprojet;