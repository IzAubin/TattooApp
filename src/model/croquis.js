const { sequelize } = require('./db.js');
let db = require('./db.js');

const Croquis = db.sequelize.define('croquis', {

    Id_croquis: {
        autoIncrement: true,
        primaryKey: true,
        type: db.Sequelize.INTEGER
    },

    Id_Projet: {
        type: db.Sequelize.INTEGER,
        notEmpty: true
    },

    Image_croquis: {
        type: db.Sequelize.STRING,
        notEmpty: true
    }

});

module.exports = Croquis;