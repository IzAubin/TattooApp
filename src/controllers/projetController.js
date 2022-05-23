const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

let Clients = require("../model/client.js");
let Projet = require("../model/projet.js");
/*
exports.getListeProjet = async (req, res, next) => {
    const param = await Projet.listeProjet(req.params.Id_Client);
    const paramc = await Clients.listeClient_id(req.params.Id_Client);
    if (param !== "") {
        res.render("listeProjets", {
        title: "Liste - Projets",
        succes: "voici votre liste de projets",
        Param: param, ParamC: paramc
        });
    } else {
        message = "Il n'y a pas d'enregistrements";
        res.render("listeProjets", { title: "Liste - Projets", message: message, ParamC: paramc });
    }
};
*/
exports.getListeProjet = async (req, res, next) => {
    console.log('entra a getListeProjet');
    const param = await Projet.listeProjet(req.params.Id_Client);
    //const paramc = await Clients.listeClient_id(req.params.Id_Client);

    console.log("----consultaIndlude-------consultaIndlude-----consultaIndlude");
    console.log(param);
    console.log("----consultaIndlude-------consultaIndlude-----consultaIndlude");


    if (param !== "") {
        res.render("listeProjets", {
        title: "Liste - Projets",
        succes: "voici votre liste de projets",
        Param: param
        //, ParamC: paramc
        });
    } else {
        message = "Il n'y a pas d'enregistrements";
        res.render("listeProjets", { title: "Liste - Projets", message: message, ParamC: paramc });
    }
};

exports.postListeProjet = (req, res, next) => {
    const idBtn = req.body.Id_projet;

    console.log("bouton: " + idBtn);
    /*
    console.log("req.body.retourId_projet-------req.body.retourId_projet----req.body.retourId_projet");
    console.log("req.body.Id_projet");
    console.log(req.body.Id_projet);
    console.log("req.body.Id_Client");
    console.log(req.body.Id_Client);
    console.log("req.body.Id_Artiste");
    console.log(req.body.Id_Artiste);
    console.log("req.body.Nom_projet");
    console.log(req.body.Nom_projet);
    console.log("req.body.Depot_projet");
    console.log(req.body.Depot_projet);
    console.log("req.body.Prix_projet");
    console.log(req.body.Prix_projet);
    console.log("req.body.Solde_projet");
    console.log(req.body.Solde_projet);
    console.log("req.body.Date_rendez_vous");
    console.log(req.body.Date_rendez_vous);
    console.log("req.body.Etat_projet");
    console.log(req.body.Etat_projet);
    console.log("req.body.retourId_projet-------req.body.retourId_projet----req.body.retourId_projet");
*/
    res.render("modifierProjet", {
        title: "Modifier un Projet", 
        passeIdProjet: idBtn, //req.body.Id_projet,
        passeIdClient: req.body.Id_Client,
        passeIdArtiste: req.body.Id_Artiste,
        oldNomProjet: req.body.Nom_projet,
        oldDepot: req.body.Depot_projet,
        oldPrix: req.body.Prix_projet,
        oldSolde: req.body.Solde_projet,
        oldDateRendeVous: req.body.Date_rendez_vous,
        oldEtatProjet: req.body.Etat_projet,
    });
    console.log("sale postListProjet postListProjet");
};

exports.getProjet = async (req, res, next) => {
    const val_id_client = req.params.Id_Client;
    const param_projet = await Projet.findAll({
        where: { Id_Client: val_id_client },
    });
    const param_client = await Clients.findOne({
        where: { Id_Client: val_id_client },
    });
    res.render("projet", {
        title: "Projet - Détails",
        Param: param_projet,
        ParamC: param_client,
    });
};

exports.postProjet = async (req, res, next) => {
    const val_projet = await Projet.create({
        Id_Client: req.body.Id_Client,
        Id_Artiste: req.body.Id_Artiste,
        Nom_projet: req.body.Nom_projet,
        Prix_projet: req.body.Prix_projet,
        Depot_projet: req.body.Depot_projet,
        Solde_projet: req.body.Solde_projet,
        Date_rendez_vous: req.body.Date_rendez_vous,
        Etat_projet: "A",
    });
    const val_param_projet = await Projet.findOne({
        limit: 1,
        where: { Id_Client: req.body.Id_Client },
        order: [["createdAt", "DESC"]],
    });
    success = "Données enregistrées avec succès";
    res.render("projet", {
        title: "Projet",
        success: success,
        ParamC: val_param_projet,
    });
};

exports.getModifierProjet = async (req, res, next) => {
    const val_id_projet = req.params.Id_projet;
    const param = await Projet.findOne({ where:{ Id_projet : val_id_projet }});
    console.log("console.log(param):console.log(param):");
    console.log(param);
    console.log("console.log(param):console.log(param):");
    
    res.render("modifierProjet", {
        title: "Modifier un Projet",
        //ParamP: param
        passeIdProjet: param.Id_projet,
        passeIdClient: param.Id_Client,
        passeIdArtiste: param.Id_Artiste,
        oldNomProjet: param.Nom_projet,
        oldDepot: param.Depot_projet,
        oldPrix: param.Prix_projet,
        oldSolde: param.Solde_projet,
        oldDateRendeVous: param.Date_rendez_vous,
        oldEtatProjet: param.Etat_projet,
        ParamP: param,
    });
};

exports.postModifierProjet = async (req, res, next) => {
    //const datos = req.body;
    console.log("-------------- datos ---------");
    //console.log(datos);
    console.log("-------------- datos ----------");
/*
    const param = await Projet.update({ 
        Nom_projet: req.body.Nom_projet,
        Date_rendez_vous: req.body.Date_rendez_vous,
        Depot_projet: req.body.Depot_projet,
        Prix_projet: req.body.Prix_projet,
        Etat_projet: req.body.Etat_projet,
        Id_projet: req.body.Id_Client
        });
*/
    const modified = await Projet.updateProjet(
        req.body.Id_Client,
        req.body.Id_projet,
        req.body.Nom_projet,
        req.body.Date_rendez_vous,
        req.body.Prix_projet,
        req.body.Depot_projet,
        req.body.Solde_projet,
        req.body.Etat_projet
    );
    
    console.log("modified-----modified------modified");
    console.log(modified);
    console.log("modified-----modified------modified");

    message = "Données modifiées avec succès";
    //paramc = await Clients.findOne(req.params.Id_Client);
    param = await Projet.listeProjet(req.body.Id_Client);
    //console.log("paramc-------------- paramc update projet ----------------------paramc");
    //console.log(paramc);
    //console.log("paramc-------------- paramc update projet ----------------------paramc");
    console.log("----******---- param update projet ----------*****---------");
    console.log(param);
    console.log("----*******----- param update projet ------------*****------");
/*
    res.render("modifierProjet", {
    title: "Liste - Projets",
    ParamP: param, //ParamC: paramc,
    succes: message,
    });
    */
   res.send("ALLO");
   /*
    res.render("listeProjets", {
        title: "Liste - Projets",
        ParamP: param, //ParamC: paramc,
        succes: message,
        });
        */
};