let Artistes = require("../model/artiste.js");

exports.getListeArtiste = async (req, res, next) => {
  // console.log("Param");
  // console.log(param);

  const param = await Artistes.findAllArtiste();

  if (param !== "") {
    res.render("listeArtiste", {
      title: "Admin - Artists",
      Param: param,
    });
  } else {
    console.log("Il n'y a pas d'enregistrements");
    message = "Il n'y a pas d'enregistrements";
    res.render("listeArtiste", { title: "Admin - Artiste", message: message });
  }
  res.render("listeArtiste", { title: "Admin - Artiste" });
};

exports.getCreerArtiste = (req, res, next) => {
  res.render("creerArtiste", { title: "Créer un Artiste" });
};

exports.postCreerArtiste = async (req, res, next) => {
  const RegistreArtiste = await Artistes.creater(
    req.body.Nom_artiste,
    req.body.Prenom_artiste,
    req.body.Surnom_artiste,
    req.body.Courriel_artiste,
    req.body.Telephone_artiste,
    req.body.Logo_artiste,

    req.body.id_Profil,

    req.body.Etat_artiste
  );
  message = "Données enregistrées avec succès";
  res.render("creerArtiste", { title: "Créer un Artiste", message: message });
};

exports.postListArtiste = (req, res, next) => {
  const idBtn = req.body.retourId;

  console.log("bouton: " + idBtn);

  res.render("modifierArtiste", {
    title: "Modifier un Artiste",
    passedId: idBtn,
    oldNom: req.body.retourNom,
    oldPrenom: req.body.retourPrenom,
    oldSurnom: req.body.retourSurnom,
    oldCourriel: req.body.retourCourriel,
    oldTel: req.body.retourTel,
    oldLogo: req.body.retourLogo,
    oldProfile: req.body.retourProfile,
    oldEtat: req.body.retourEtat,
  });
};

exports.getModifierArtiste = async (req, res, next) => {
  const val_id_artiste = req.params.Id_artiste;
  const param = await Artistes.findOne({ where:{ Id_artiste : val_id_artiste }});
  res.render("modifierArtiste", { title: "Modifier un Artiste", ParamP: param });
};

exports.postModifierArtiste = async (req, res, next) => {
  const modified = await Artistes.updateArtiste(
    req.body.Id_artiste,
    req.body.Nom_artiste,
    req.body.Prenom_artiste,
    req.body.Surnom_artiste,
    req.body.Courriel_artiste,
    req.body.Telephone_artiste,
    req.body.Logo_artiste,
    req.body.id_Profil_A,
    req.body.Etat_artiste
  );

  console.log(req.body.Prenom_artiste);

  message = "Données modifiées avec succès";
  param = await Artistes.findAllArtiste();
  res.render("listeArtiste", {
    title: "Admin - Artiste",
    Param: param,
    message: message,
  });
};
