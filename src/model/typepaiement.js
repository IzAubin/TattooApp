const { sequelize } = require('./db.js');
let db = require('./db.js');

const TypePaiement = db.sequelize.define('typepaiement', {

    id_typepaiement: {
        autoIncrement: true,
        primaryKey: true,
        type: db.Sequelize.INTEGER
    },

    nom_typepaiement: {
        type: db.Sequelize.STRING,
        notEmpty: true
    },

    Enable:{
       type: db.Sequelize.ENUM('A', 'I'),
       defaultValue: 'A'
    }
});

module.exports = TypePaiement;

