const { sequelize } = require('./db.js');
let db = require('./db.js');

const ImageReference = db.sequelize.define('image_reference', {

    Id_image_reference: {
        autoIncrement: true,
        primaryKey: true,
        type: db.Sequelize.INTEGER
    },

    Id_Projet: {
        type: db.Sequelize.INTEGER,
        notEmpty: true
    },

    Image_reference: {
        type: db.Sequelize.STRING,
        notEmpty: true
    }

});

module.exports = ImageReference;