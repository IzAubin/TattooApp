let Clients = require("../model/client.js");

exports.getListeClient = async (req, res, next) => {
  // const val_idA = req.params.Id_Artiste;
  // console.log("val_idA");
  // console.log(val_idA);
  console.log("***---***req.params.Id_Artiste***---***");
  console.log(req.params.Id_Artiste);
  const param = await Clients.listeClient(req.params.Id_Artiste);
  console.log("Param");
  console.log(param);

  if (param !== "") {
    // console.log(param);
    res.render("listeClients", {
      title: "Admin - Clients",
      message: "voici votre liste de clients",
      Param: param,
    });
  } else {
    // console.log("Il n'y a pas d'enregistrements");
    message = "Il n'y a pas d'enregistrements";
    res.render("listeClients", { title: "Admin - Clients", message: message });
  }
};

exports.getCreerClient = (req, res, next) => {
  res.render("creerClient", { title: "Créer un Client", nomDep: "sdfdsf" });
};

exports.postCreerClient = async (req, res, next) => {
  // console.log(req.body);
  const RegistreClient = await Clients.creater(
    req.body.nom_client,
    req.body.prenom_client,
    req.body.surnom_client,
    req.body.communication_client,
    req.body.telephone_client,
    req.body.courriel_client,
    req.body.Id_Artiste,
    req.body.enable_client
  );

  // const param = await Clients.listeClient();

  message = "Données enregistrées avec succès";
  // res.send("Allo");
  res.render("creerclient", {
    message: message,
  });
};

exports.postListClient = (req, res, next) => {
  const idBtn = req.body.retourId;
  console.log("postListClient-------------postListClient-----------postListClient---------------postListClient");
  console.log("bouton: " + idBtn);
  console.log("postListClient-------------postListClient-----------postListClient---------------postListClient");
  
  console.log("req.body.retourNomreq.body.retourNomreq.body.retourNomreq.body.retourNom");
  console.log(req.body.retourNom);
  console.log(req.body.Nom_client);
  console.log("req.body.retourNomreq.body.retourNomreq.body.retourNomreq.body.retourNom");
  
  
  res.render("modifierClient", {
    title: "Modifier un Client",
    passedId: idBtn,
    oldNom: req.body.retourNom,
    oldPrenom: req.body.retourPrenom,
    oldSurnom: req.body.retourSurnom,
    oldCom: req.body.retourCom,
    oldTel: req.body.retourTel,
    oldCourriel: req.body.retourCourriel,
    oldEtat: req.body.retourEtat,
  });
};

exports.postModifierClient = async (req, res, next) => {
  console.log(
    "-------------------------------c'est rentré 1-------------------------------"
  );

  const modified = await Clients.updateInfo(
    req.body.Id_Client,
    req.body.nom_client,
    req.body.prenom_client,
    req.body.surnom_client,
    req.body.communication_client,
    req.body.courriel_client,
    req.body.cellulaire_client,
    req.body.enable_client,
    //-----id artiste
    req.body.Id_Artiste
  );
  message = "Données modifiées avec succès";
  param = await Clients.listeClient(req.body.Id_Artiste); // <-------valeur Mocked artisteId
  res.render("listeClients", {
    title: "Admin - Clients",
    Param: param,
    message: message,
  });
};

exports.getModifierClient = async (req, res, next) => {
  const val_id_client = req.params.Id_Client;

  const param = await Clients.findOne({ where: { Id_client: val_id_client } });
  console.log("-----------------param-----------------");
  console.log(param);
  res.render("modifierClient", {
    title: "Modifier un Client",
    passedId: param.Id_Client,
    passedIdArtiste: param.Id_Artiste,
    ParamP: param,
    oldNom: param.Nom_client,
    oldPrenom: param.Prenom_client,
    oldSurnom: param.Surnom_client,
    oldCom: param.Communication_client,
    oldCourriel: param.Courriel_client,
    oldTel: param.Telephone_client,
    oldEtat: param.Etat_client,
  });
};
