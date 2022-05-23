const { sequelize } = require('./db.js');
let db = require('./db.js');

const Paiement = db.sequelize.define('paiement', {

    Id_paiement: {
        autoIncrement: true,
        primaryKey: true,
        type: db.Sequelize.INTEGER
    },

    Id_Projet: {
        type: db.Sequelize.INTEGER,
        notEmpty: true
    },

    Type_paiement: {
        type: db.Sequelize.ENUM('Visa', 'Mastercard','Interac','Comptant'),
        notEmpty: true
    },

    Date_paiement: {
        type: db.Sequelize.STRING,
        notEmpty: true
    },

    Valeur_paiement: {
        type: db.Sequelize.INTEGER,
        notEmpty: true
    },

    N_transaction_paiement: {
        type: db.Sequelize.STRING,
        notEmpty: true
    }
    
});

module.exports = Paiement;