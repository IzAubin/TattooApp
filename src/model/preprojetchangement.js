const { sequelize } = require('./db.js');
let db = require('./db.js');

const PreprojetChangement = db.sequelize.define('preprojetchangement', {

    id_changement: {
        autoIncrement: true,
        primaryKey: true,
        type: db.Sequelize.INTEGER
    },

    id_preprojet: {
        type: db.Sequelize.INTEGER,
        notEmpty: true
    },

    image: {
        type: db.Sequelize.STRING,
        notEmpty: true
    },

    approbation:{
        type: db.Sequelize.STRING,
        notEmpty:true
    },

});

module.exports = PreprojetChangement;