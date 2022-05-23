const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

let Clients = require("../model/client.js");
let Artiste = require("../model/artiste.js");
let Projet = require("../model/projet.js");
let Paiement = require("../model/paiement.js");
let Image = require("../model/images.js");
const moment = require("moment");


exports.getPhotos = async(req, res, next) => {
    const data = req.params;
    console.log("req.params-----req.params-----");
    console.log(data);
    console.log("----------req.params----------");
    /*
    res.render("photos", {
        title: "Projet - Image",
        ParamP: data,
    });
    */
    if (data.Id_Client != null) {
        //const d_id_projet = await Projet.findOne({where: {Id_projet : val_id_projet }});
        /*
        const inf_projet = await Projet.findAll({
            where: { Id_Projet: data.Id_Client },
            include: [
                {
                    model: Clients,
                },
            ],
        });
        */
        const inf_projet = await Projet.findAll({
            where: { Id_Projet: data.Id_Client }
        });

        //const d_id_client = await Clients.findOne({where: {Id_client : req.params.Id_Client }});
        console.log("----------------inf_projet---------------------");
        console.log(inf_projet);
        console.log("----------------inf_projet---------------------");
        //res.render("menuimages", { ParamP: d_id_projet });
        res.render("photos", {
            title: "Projet - Image",
            ParamP: inf_projet,
        });
    } else {
        const note = "Aucune action d'enregistrement d'image ne peut être effectuée car aucun projet n'a été créé.";
        //res.render("menuimages", { note: note });
        res.render("photos", {
            title: "Projet - Image",
            message: note,
            ParamP: inf_imgprojet,
        });
    }
};

exports.postPhotos = async(req, res, next) => {
    const info = req.body;
    console.log("vlr_info");
    console.log(info);

    const info_img = req.files.Image;
    console.log("vlr_info_img");
    console.log(info_img);
    
    const info_imgs = req.files;
    console.log("------------------vlr_info_imgs-------------------");
    console.log(info_imgs);
    console.log("------------------vlr_info_imgs-------------------");
    
    const registrephoto = await Image.create({
        Id_Projet: info.Id_projet, 
        Type_image: info.Type_image, 
        Nom_image: info_img.name, 
        Image: info_img.data,
        img: info_img.data
    });
    info_img.mv('./public/images/'+info_img.name, function(err){
        if (err){
            res.send(err);
        } else {
            //res.send("file Uploaded");
            success = "file Uploaded";
            res.render("photos", {
                title: "Projet - Image",
                success,
                ParamP: info.Id_projet,
            });
        }
    })

    console.log("registrephoto");
    console.log(registrephoto);
    //message = 'Données enregistrées avec succès';
   // res.render("photos", { title: "Artiste - Profile" , success , ParamP: registrephoto });
    //res.send('ALLO');
};


exports.getlisteImages = async(req, res, next) => {
    const val_params = req.params;
    console.log("val_params");
    console.log(val_params);
    const val_idprojet = req.params.Id_Client;
    console.log("val_idprojet");
    console.log(val_idprojet);
    /*const img = await Image.findAll({
        attributes: ['Id_image', 'Id_Porjet', 'Type_image', 'Image', 'img', ], where: { Id_Projet: val_idprojet }
    });*/
    const img = await Image.findAll({
        where: { Id_Projet: val_idprojet },
        include: [
            {
                model: Projet,
            },
        ],
    });
    console.log("img ------- img  -------- img");
    console.log(img);
    console.log("img ------- img  -------- img");
    res.render("listephotos", {
        title: "Images",
        ParamP: img,
    });
/*
    if (img) {
        //const contentType = await FileType.fromBuffer(img.img); // get the mimetype of the buffer (in this case its gonna be jpg but can be png or w/e)
        //res.type(contentType.mime); // not always needed most modern browsers including chrome will understand it is an img without this
        res.end(img.img);
    } else {
        res.end('No Img with that Id!');
    }
  */

   //res.send("ALLO");
};




exports.getHomepage = (req, res, next) => {
    res.render("main", { title: "Booking - Main" });
};

exports.getLoginPage = (req, res, next) => {
    res.render("artisteLogin", { title: "Login - Artiste" });
};

exports.getLoginAdmin = (req, res, next) => {
    res.render("adminLogin", { title: "Login - Admin" });
};

exports.getArtiste = (req, res, next) => {
    res.render("artiste", { title: "Artiste - Main" });
};

exports.getProjetsArtiste = (req, res, next) => {
    res.render("projetsArtiste", { title: "Artiste - Projets" });
};

exports.getProfileArtiste = (req, res, next) => {
    res.render("profileArtiste", { title: "Artiste - Profile" });
};
/*
exports.getProjet = async (req, res, next) => {
    const val_id_client = req.params.Id_Client;

    const param_projet = await Projet.findAll({
        where: { Id_Client: val_id_client },
    });
    const param_client = await Clients.findOne({
        where: { Id_Client: val_id_client },
    });

    console.log("param_projet");
    console.log(param_projet);
    console.log("param_client");
    console.log(param_client);

    //res.send("Allo");
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
*/
// ****************************** Quy ******************************

exports.getListeClient = async (req, res, next) => {
    const param = await Clients;

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

exports.getProjetsArtiste = async (req, res, next) => {
    let param = await Projet.findAll({
        where: { Id_Artiste: req.body.Id_Artiste },
    });
    res.render("projetsArtiste", { title: "Artiste - Projets", Param: param });
};

exports.getProjetModif = async (req, res, next) => {
    let projEnQuestion = req.params.Id_projet;

    res.render("projetsModifier", { title: "Modifier - Projets", Param: param });
};

exports.postProjetModif = async (req, res, next) => {};



// ****************************** Quy ******************************

exports.getAdmin = (req, res, next) => {
    res.render("admin", { title: "Admin - Main" });
};

exports.getListeClient = async (req, res, next) => {
    const val_idUser = req.user.Id_Artiste;
    console.log("val_idUser");
    console.log(val_idUser);
    if (val_idUser == null) {
        res.render("listeClients", { title: "Admin - Clients" });
    } else {
        const param = await Clients.findAll({ where: { Id_Artiste: val_idUser } });
        console.log("Param");
        console.log(param);
        res.render("listeClients", {
            title: "Admin - Clients",
            Param: param,
        });
    }
    /*
  if (param != '') {
      res.render('listeClients', {
          title: "Admin - Clients", Param: param
      });
  } else {
      console.log('Il n\'y a pas d\'enregistrements');
      message = 'Il n\'y a pas d\'enregistrements';
      res.render('listeClients', { title: "Admin - Clients", message: message});
  }
  res.render("listeClients", {title: "Admin - Clients"});
*/
    //res.send('aqui');
};

exports.getListeArtiste = (req, res, next) => {
    res.render("listeArtiste", { title: "Admin - Artiste" });
};

exports.getRapport = (req, res, next) => {
    res.render("rapportRevenus", { title: "Admin - Rapport" });
};

exports.getCreerClient = (req, res, next) => {
    res.render("creerclient", { title: "Créer un Client" });
};

exports.postCreerClient = async (req, res, next) => {
    const RegistreClient = await Clients.create(req.body);
    message = "Données enregistrées avec succès";
    res.render("creerclient", { title: "Créer un Client", success });
};

exports.getSignup = async (req, res, next) => {
    const param_artiste = await Artiste.findAll({ where: { Etat_artiste: "A" } });
    res.render("signup", { title: "Signup", Param: param_artiste });
};

exports.postSignup = passport.authenticate("local.signup", {
    successRedirect: "/signin",
    failureRedirect: "/signup",
    failureFlash: true,
});

exports.getFail = (req, res) => {
    res.render("fail");
};

exports.getProfil = (req, res) => {
    res.render("profil");
};

exports.getLogout = (req, res, next) => {
    req.logOut();
    res.redirect("/");
};

exports.getSignin = (req, res, next) => {
    res.render("signin");
};

//exports.postSignin = isNotLoggedIn, (req, res, next) => {
exports.postSignin = (req, res, next) => {
    passport.authenticate("local.signin", {
        successRedirect: "/profil",
        failureRedirect: "/fail",
        failureFlash: true,
    })(req, res, next);
};

exports.getMenuImages = async (req, res, next) => {
    const val_id_projet = req.params.Id_projet;
    console.log("val_id_projet");
    console.log(val_id_projet);

    if (val_id_projet != null) {
        //const d_id_projet = await Projet.findOne({where: {Id_projet : val_id_projet }});
        const d_id_projet = await Projet.findAll({
            where: { Id_projet: val_id_projet },
            include: [
                {
                    model: Clients,
                },
            ],
        });

        //const d_id_client = await Clients.findOne({where: {Id_client : req.params.Id_Client }});
        console.log("d_id_projet");
        console.log(d_id_projet);
        res.render("menuimages", { ParamP: d_id_projet });
    } else {
        const note = "Aucune action d'enregistrement d'image ne peut être effectuée car aucun projet n'a été créé.";
        res.render("menuimages", { note: note });
    }
    /*
  const param_projet = await Projet.findAll({where: { Id_Client: val_id_client }})
  const param_client = await Clients.findOne({where: { Id_Client: val_id_client }})
  console.log("param_projet");
  console.log(param_projet);
  console.log("param_client");
  console.log(param_client);
  
  res.render("projet", {title: "Projet - Détails", Param: param_projet, ParamC: param_client});
*/
    //    res.render("menuimages");
};

exports.getCroquis = (req, res, next) => {
    res.send("Croquis");
};

exports.getImageReference = (req, res, next) => {
    res.send("ImageReference");
};

exports.getDessinFinal = (req, res, next) => {
    res.send("DessinFinal");
};

exports.getTattoFinal = (req, res, next) => {
    res.send("TattoFinal");
};

exports.getAiguille = (req, res, next) => {
    res.send("Aiguille");
};

exports.postCreerClient = async (req, res, next) => {
    const RegistreClient = await Clients.create(req.body);
    message = "Données enregistrées avec succès";
    res.render("creerclient", { title: "Créer un Client", message: message });
};

exports.getPaiement = async (req, res, next) => {
    // const solde_projet = req.params.Id_projet;
    var parametres = req.params;
    console.log('---------------parametres-------------');
    console.log(parametres);
    console.log('---------------parametres-------------');
    
    var projet_info = await Projet.findByPk(parseInt(req.params.Id_projet));
    console.log('---------------projet_info-------------');
    console.log(projet_info);
    console.log('---------------projet_info-------------');
    const d_id_projet = await Projet.findAll({
        where: { Id_projet: parseInt(req.params.Id_projet) },
        include: [
            {
                model: Clients,
            },
            {
                model: Paiement,
            },
        ],
    });
    console.log('---d_id_projet------------d_id_projet-----------d_id_projet--');
    console.log(d_id_projet);
    console.log('--d_id_projet------------projet_info------------d_id_projet-');
    
    res.render("paiement", {
        title: "Paiement",
        idprojet: req.params.Id_projet,
        infocleint: d_id_projet,
    });

    // res.render("paiement");
};

exports.postPaiement = async (req, res, next) => {
    // const modified = await Paiement.updateArtiste(req.body.Id_paiement, req.body.Id_Projet, req.body.Type_paiement, req.body.Valeur_paiement);

    await Paiement.create({
        Id_Projet: parseInt(req.body.Id_Projet),
        Type_paiement: req.body.Type_paiement,
        Valeur_paiement: req.body.Valeur_paiement,
        Date_paiement: moment().format("DD/MM/YYYY"),
        N_transaction_paiement: req.body.N_transaction_paiement,
    });

    console.log(req.body.Id_paiement);
    res.render("projet");
};

exports.getTest = async (req, res, next) => {
    // var projet_info = await Projet.findByPk(parseInt(req.params.Id_projet));

    res.render("test");
};

