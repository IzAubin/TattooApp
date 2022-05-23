const { sequelize } = require("./db.js");
let db = require("./db.js");

const Artiste = db.sequelize.define("artiste", {

  Id_artiste: {

    autoIncrement: true,
    primaryKey: true,
    type: db.Sequelize.INTEGER,
  },

  Nom_artiste: {
    type: db.Sequelize.STRING,
    notEmpty: true,
  },

  Prenom_artiste: {
    type: db.Sequelize.STRING,
    notEmpty: true,
  },

  Surnom_artiste: {
    type: db.Sequelize.STRING,
    notEmpty: true,
  },

  Courriel_artiste: {
    type: db.Sequelize.STRING,
    notEmpty: true,
  },

  Telephone_artiste: {
    type: db.Sequelize.STRING,
    notEmpty: true,
  },

  Logo_artiste: {
    type: db.Sequelize.STRING,
    notEmpty: true,
  },



  Id_Profil: {
    type: db.Sequelize.INTEGER,
    notEmpty: true,
  },

  Etat_artiste: {
    type: db.Sequelize.ENUM("A", "I"),
    defaultValue: "A",
  },
});


Artiste.creater = async (
  p_nom,
  p_prenom,
  p_surnom,
  p_courriel,
  p_telephone,
  p_logo,
  p_idprofile,
  p_enable,
  req,
  res,
  next
) => {
  await Artiste.create({
    Nom_artiste: p_nom,
    Prenom_artiste: p_prenom,
    Surnom_artiste: p_surnom,
    Courriel_artiste: p_courriel,
    Telephone_artiste: p_telephone,
    Logo_artiste: p_logo,
    id_Profil_A: p_idprofile,
    Etat_artiste: p_enable,
  });
};

Artiste.updateArtiste = async (
  p_id,
  p_nom,
  p_prenom,
  p_surnom,
  p_courriel,
  p_telephone,
  p_logo,
  p_idprofile,
  p_enable,
  req,
  res,
  next
) => {
  // console.log("update~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
  // console.log(p_nom);
  // console.log(p_id);
  await Artiste.update(
    {
      Nom_artiste: p_nom, 
      Prenom_artiste: p_prenom, 
      Surnom_artiste: p_surnom,
      Courriel_artiste: p_courriel,
      Telephone_artiste: p_telephone,
      Logo_artiste: p_logo,
      id_Profil_A: p_idprofile,
      Etat_artiste: p_enable,
    },
    {
      where: { id_artiste: p_id },
    }
  );
};

  Artiste.findAllArtiste = async (req, res, next) => {
  const lesArtistes = await Artiste.findAll();
  return lesArtistes;
};


module.exports = Artiste;
