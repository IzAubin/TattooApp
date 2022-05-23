// Fichier de connexion à la base de données
let db = require("./db.js");

// synchronisation du modèle (tables)

let Artiste = require("./artiste.js");
let Client = require("./client.js");
let Consentement = require("./consentement.js");
let Croquis = require("./croquis.js");
let DessinFinal = require("./dessinfinal.js");
let Images = require('./images.js');
let ImageReference = require("./imagereference.js");
let Paiement = require("./paiement.js");
let Profil = require("./profil.js");
let Projet = require("./projet.js");
let TattoFinale = require("./tattofinale.js");
let Utilisateur = require("./utilisateur.js");
const { ClientRequest } = require("http");

// Creation des cles Foreignkey

Artiste.belongsTo(Profil, { foreignKey: "Id_Profil" });
Profil.hasMany(Artiste, { foreignKey: "Id_Profil" });

Utilisateur.belongsTo(Artiste, { foreignKey: "Id_Artiste" });
Artiste.hasMany(Utilisateur, { foreignKey: "Id_Artiste" });

Artiste.hasMany(Projet, { foreignKey: "Id_Artiste" });
Projet.belongsTo(Artiste, { foreignKey: "Id_Artiste" });

Artiste.hasMany(Client, { foreignKey: "Id_Artiste" });
Client.belongsTo(Artiste, { foreignKey: "Id_Artiste" });

Client.hasMany(Projet, { foreignKey: "Id_Client" });
Projet.belongsTo(Client, { foreignKey: "Id_Client" });

Consentement.belongsTo(Projet, { foreignKey: "Id_Projet" });

Projet.hasMany(Paiement, { foreignKey: "Id_Client" });
Paiement.belongsTo(Projet, { foreignKey: "Id_Client" });

Projet.hasMany(DessinFinal, { foreignKey: "Id_Projet" });
DessinFinal.belongsTo(Projet, { foreignKey: "Id_Projet" });

Projet.hasMany(Croquis, { foreignKey: "Id_Projet" });
Croquis.belongsTo(Projet, { foreignKey: "Id_Projet" });

Projet.hasMany(ImageReference, { foreignKey: "Id_Projet" });
ImageReference.belongsTo(Projet, { foreignKey: "Id_Projet" });

Projet.hasMany(Images, { foreignKey: "Id_Projet" });
Images.belongsTo(Projet, { foreignKey: "Id_Projet" });

Projet.hasMany(TattoFinale, { foreignKey: "Id_Projet" });
TattoFinale.belongsTo(Projet, { foreignKey: "Id_Projet" });

db.sequelize.sync({ force: true }).then(() => {
    console.log(`Database & tables created!`);
    Profil.bulkCreate([
        { Nom_profil: "Administrateur", Etat_profil: "A" },
        { Nom_profil: "Artiste", Etat_profil: "A" },
        { Nom_profil: "Admin-Artis", Etat_profil: "A" },
    ])
        .then(function () {
            return Profil.findAll();
        })
        .then(function (profil) {
            console.log(profil);
        });

    Artiste.bulkCreate([
        {
            Nom_artiste: "Admin",
            Prenom_artiste: "Super",
            Surnom_artiste: "Super-Admin",
            Courriel_artiste: "SuperAdmin@anonymous.com",
            Telephone_artiste: "9999999999",
            Logo_artiste: "",
            Id_Profil: 1,
            Etat_artiste: "A",
        },
        {
            Nom_artiste: "Aubin",
            Prenom_artiste: "Isabelle",
            Surnom_artiste: "Isabelle Aubin",
            Courriel_artiste: "Isabelle@anonymous.com",
            Telephone_artiste: "8465432",
            Logo_artiste: "",
            Id_Profil: 2,
            Etat_artiste: "A",
        },
        {
            Nom_artiste: "Robichaud",
            Prenom_artiste: "Benoit",
            Surnom_artiste: "Benoit Robichaud",
            Courriel_artiste: "Benoit@anonymous.com",
            Telephone_artiste: "8465432874",
            Logo_artiste: "",
            Id_Profil: 2,
            Etat_artiste: "A",
        },
        {
            Nom_artiste: "Gagnon",
            Prenom_artiste: "Maurice",
            Surnom_artiste: "Maurice Gagnon",
            Courriel_artiste: "Maurice@anonymous.com",
            Telephone_artiste: "24359872",
            Logo_artiste: "",
            Id_Profil: 2,
            Etat_artiste: "A",
        },
        {
            Nom_artiste: "Pierre Tran",
            Prenom_artiste: "Quy",
            Surnom_artiste: "Quy Pierre Tran",
            Courriel_artiste: "Quy@anonymous.com",
            Telephone_artiste: "13542435",
            Logo_artiste: "",
            Id_Profil: 2,
            Etat_artiste: "A",
        },
        {
            Nom_artiste: "Martinez",
            Prenom_artiste: "Roland",
            Surnom_artiste: "Roland Martinez",
            Courriel_artiste: "Roland@anonymous.com",
            Telephone_artiste: "24356548",
            Logo_artiste: "",
            Id_Profil: 2,
            Etat_artiste: "A",
        },
    ])
        .then(function () {
            return Artiste.findAll();
        })
        .then(function (artiste) {
            console.log(artiste);
        });
    Client.bulkCreate([
        {
            Nom_client:"Marmelade",
            Prenom_client: "Madame",
            Surnom_client: "Lady",
            Communication_client: "instababe",
            Telephone_client: "1234562345",
            Courriel_client: "LadyM@g.com",
            Id_Artiste: "1",
            Etat_client: "A",
        },
        {
            Nom_client:"Boomer",
            Prenom_client: "Big Daddy",
            Surnom_client: "Henry",
            Communication_client: "facebook/bdb",
            Telephone_client: "5162521661",
            Courriel_client: "BDB69@g.com",
            Id_Artiste: "1",
            Etat_client: "A",
        },
    ])
        .then(function () {
            return Client.findAll();
        })
        .then(function (client) {
            console.log(client);
        });
    Projet.bulkCreate([
        {
            Id_Artiste: "1",
            Id_Client: "1",
            Nom_projet: "BDB Immense Poulet",
            Depot_projet: "100",
            Prix_projet: "4000",
            Solde_projet: "3900",
            Date_rendez_vous: "2022-04-28T03:56",
            Etat_projet: "A",
        },
        {
            Id_Artiste: "1",
            Id_Client: "1",
            Nom_projet: "Lady No Rugrats",
            Depot_projet: 100,
            Prix_projet: 800,
            Solde_projet: 700,
            Date_rendez_vous: "2022-04-28T03:56",
            Etat_projet: "A",
        },
    ])
        .then(function () {
            return Projet.findAll();
        })
        .then(function (projet) {
            console.log(projet);
        });
});

module.exports = {
    Artiste,
    Client,
    Consentement,
    Croquis,
    DessinFinal,
    Images,
    ImageReference,
    Paiement,
    Profil,
    Projet,
    TattoFinale,
    Utilisateur,
};
