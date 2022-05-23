const { sequelize } = require('./db.js');
let db = require('./db.js');
let Clients = require('./client.js');

const Projet = db.sequelize.define('projet', {

    Id_projet: {
        autoIncrement: true,
        primaryKey: true,
        type: db.Sequelize.INTEGER
    },

    Id_Client: {
        type: db.Sequelize.INTEGER,
        notEmpty: true
    },

    Id_Artiste: {
        type: db.Sequelize.INTEGER,
        notEmpty: true
    },

    Nom_projet: {
        type: db.Sequelize.STRING,
        notEmpty: true,
    },

    Depot_projet: {
        type: db.Sequelize.INTEGER,
        notEmpty: true
    },

    Prix_projet: {
        type: db.Sequelize.INTEGER,
        notEmpty: true
    },

    Solde_projet: {
        type: db.Sequelize.INTEGER,
        notEmpty: true
    },

    Date_rendez_vous: {
        type: db.Sequelize.STRING,
        notEmpty: true
    },

    Etat_projet: {
        type: db.Sequelize.ENUM('A', 'I', 'F'),
        defaultValue: 'A'
    }
});

Projet.listeProjet = async (p_id_client, req, res, next) => {
    //const lesProjet = await Projet.findAll({ where: { Id_Client: p_id_client} });
    console.log('entra a listeProjet');
    const lesProjet = await Projet.findAll({
        include: [{
            model: Clients,
            where: { Id_Client: p_id_client }
        }]
    });
    console.log('sale a listeProjet');
    return lesProjet;
};

Projet.updateProjet = async (
    p_id_client,
    p_id_projet,
    p_nom_projet,
    p_date_rendez_vous,
    p_prix_projet,
    p_depot_projet,
    p_solde_projet,
    p_etat_projet,
    res,
    req,
    next
    ) => {
    console.log("ingresa al metodo Projet.updateProjet");
    console.log("p_id_client");
    console.log(p_id_client);
    console.log("p_id_projet");
    console.log(p_id_projet);
    console.log("p_nom_projet");
    console.log(p_nom_projet);
    console.log("p_date_rendez_vous");
    console.log(p_date_rendez_vous);
    console.log("p_prix_projet");
    console.log(p_prix_projet);
    console.log("p_depot_projet");
    console.log(p_depot_projet);
    console.log("p_solde_projet");
    console.log(p_solde_projet);
    console.log("p_etat_projet");
    console.log(p_etat_projet);
    const test = await Projet.update(
    {
        Nom_projet: p_nom_projet,
        Prix_projet: p_prix_projet,
        Depot_projet: p_depot_projet,
        Solde_projet: p_prix_projet - p_depot_projet,
        Date_rendez_vous: p_date_rendez_vous,
        Etat_projet: p_etat_projet,
    },
    {
        where: { Id_projet: p_id_projet },
    });
    console.log("testtesttesttesttesttesttesttesttest");
    console.log(test);
    console.log("testtesttesttesttesttesttesttesttest");
};

module.exports = Projet;