let Clients = require("../model/client.js");
let Projet = require("../model/projet.js");
let Images = require("../model/images.js");

exports.getImages = (idProjet, req, res, next) =>{
    const val_id_projet = req.body.Id_Projet;
    console.log('val_id_projet');
    console.log(val_id_projet);
    res.render("images")
};

exports.postImages = (req, res, next) =>{
    res.send("Funciona post images");
};