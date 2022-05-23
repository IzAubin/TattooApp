var express = require("express");
var router = express.Router();
var indexController = require("../controllers/site.js");
var ClientController = require("../controllers/clientController.js");
var artisteController = require("../controllers/artisteController");
var ProjetController = require("../controllers/projetController.js");
//var imagesController = require("../controllers/imagesController.js");

router.get("/", indexController.getHomepage);
router.get("/artisteLogin", indexController.getLoginPage);
router.get("/artiste", indexController.getArtiste);
router.get("/profileArtiste", indexController.getProfileArtiste);
router.get("/projetsArtiste", indexController.getProjetsArtiste);

//
router.get("/listeprojets/:Id_Client", ProjetController.getListeProjet);
router.post("/listeprojets/:Id_Client", ProjetController.postListeProjet);
router.get("/modifierProjet/:Id_projet", ProjetController.getModifierProjet);
router.post("/modifierProjet/:Id_projet", ProjetController.postModifierProjet);
// router.post("/listeprojets/:Id_Client", ProjetController.postListeProjet);
router.get("/projet/:Id_Client", ProjetController.getProjet);
router.post("/projet/:Id_Client", ProjetController.postProjet);

router.get("/photos/:Id_Client", indexController.getPhotos);
router.post("/photos/:Id_Client", indexController.postPhotos);
router.get("/listephotos/:Id_Client", indexController.getlisteImages);
//router.post("/photos/:Id_projet", indexController.postPhotos);

// router.get("/projet/:Id_Client", indexController.getProjet);
// router.post("/projet/:Id_Client", indexController.postProjet);
//router.get("/projet", indexController.getProjet);

router.get("/adminLogin", indexController.getLoginAdmin);
router.get("/admin", indexController.getAdmin);
router.get("/rapportRevenus", indexController.getRapport);

router.get("/listeArtiste", artisteController.getListeArtiste);
router.post("/listeArtiste", artisteController.postModifierArtiste);
router.get("/modifierArtiste/:Id_artiste", artisteController.getModifierArtiste);
router.post("/modifierArtiste/:Id_artiste", artisteController.postListArtiste);
router.get("/creerArtiste", artisteController.getCreerArtiste);
router.post("/creerArtiste", artisteController.postCreerArtiste);

// vers modifierClient avec POST de listClient
router.post("/modifierClient/:Id_Client", ClientController.postListClient);
router.post("/listeClients", ClientController.postModifierClient);

// vers listeClients avec POST de modifierClient
router.get("/modifierClient/:Id_Client", ClientController.getModifierClient);
router.get("/listeClients/:Id_Artiste", ClientController.getListeClient);
router.get("/creerclient", ClientController.getCreerClient);
router.post("/creerclient", ClientController.postCreerClient);


router.get("/signup", indexController.getSignup);
router.post("/signup", indexController.postSignup);

router.get("/signin", indexController.getSignin);
router.post("/signin", indexController.postSignin);
router.get("/fail", indexController.getFail);

router.get("/profil", indexController.getProfil);

router.get("/logout", indexController.getLogout);
router.get("/menuimages/:Id_projet", indexController.getMenuImages);




router.get("/croquis/:Id_projet", indexController.getCroquis);
router.get("/imagereference/:Id_projet", indexController.getImageReference);
router.get("/dessinfinale/:Id_projet", indexController.getDessinFinal);
router.get("/tattofinal/:Id_projet", indexController.getTattoFinal);
router.get("/aiguille/:Id_projet", indexController.getAiguille);

router.get("/paiement/:Id_projet", indexController.getPaiement);
router.post("/paiement", indexController.postPaiement);

router.get("/test", indexController.getTest);
// router.post("/test", indexController.postTest);


module.exports = router;
