const { sequelize } = require('./db.js');
let db = require('./db.js');

const Partcorp = db.sequelize.define('partcorp', {

    Id_part: {
        autoIncrement: true,
        primaryKey: true,
        type: db.Sequelize.INTEGER
    },

    Nom_part: {
        type: db.Sequelize.STRING,
        notEmpty: true
    },

    Enable:{
       type: db.Sequelize.ENUM('A', 'I'),
       defaultValue: 'A'
    }
});

module.exports = Partcorp;