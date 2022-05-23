const { sequelize } = require('./db.js');
let db = require('./db.js');

const RendezVous = db.sequelize.define('rendezvous', {

    id_rendezvous: {
        autoIncrement: true,
        primaryKey: true,
        type: db.Sequelize.INTEGER
    },

    id_projet: {
        type: db.Sequelize.INTEGER,
        notEmpty: true
    },

    date: {
        type: db.Sequelize.STRING,
        notEmpty: true
    },

    date_annulation: {
        type: db.Sequelize.STRING,
        notEmpty: true
    },

    description_annulation: {
        type: db.Sequelize.STRING,
        notEmpty: true
    }


});

module.exports = RendezVous;