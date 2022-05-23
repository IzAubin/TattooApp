const { sequelize } = require('./db.js');
let db = require('./db.js');

const UserTypeart = db.sequelize.define('user_typeart', {

    id_artiste: {
        type: db.Sequelize.INTEGER,
        notEmpty: true
    },

    id_typeart: {
        type: db.Sequelize.INTEGER,
        notEmpty: true
    }

});

module.exports = UserTypeart;