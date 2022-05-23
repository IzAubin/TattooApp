const { sequelize } = require('./db.js');
let db = require('./db.js');

const Images = db.sequelize.define('images', {

    Id_image: {
        autoIncrement: true,
        primaryKey: true,
        type: db.Sequelize.INTEGER
    },

    Id_Projet: {
        type: db.Sequelize.INTEGER,
        notEmpty: true
    },

    Type_image: {
        type: db.Sequelize.ENUM('1', '2','3','4', '5'),
        defaultValue: '1'
    },

    Nom_image: {
        type: db.Sequelize.STRING,
        notEmpty: true
    },

    Image: {
        type: db.Sequelize.BLOB('long'),
        notEmpty: true
    },
    img: {
        type: db.Sequelize.BLOB('long'),
        notEmpty: true
    },

});

Images.listeImages = async (p_id, req, res, next) => {
    const lesImages = await Images.findAll({ where: { Id_Projet: p_id } });
    return lesImages;
};

module.exports = Images;