const { sequelize } = require("./db.js");
let db = require("./db.js");

const Client = db.sequelize.define("client", {
  Id_Client: {
    autoIncrement: true,
    primaryKey: true,
    type: db.Sequelize.INTEGER,
  },

  Nom_client: {
    type: db.Sequelize.STRING,
    notEmpty: true,
  },

  Prenom_client: {
    type: db.Sequelize.STRING,
    notEmpty: true,
  },

  Surnom_client: {
    type: db.Sequelize.STRING,
    notEmpty: true,
  },

  Communication_client: {
    type: db.Sequelize.STRING,
    notEmpty: true,
  },

  Telephone_client: {
    type: db.Sequelize.STRING,
    notEmpty: true,
  },

  Courriel_client: {
    type: db.Sequelize.STRING,
    notEmpty: true,
  },

  Id_Artiste: {
    type: db.Sequelize.INTEGER,
    notEmpty: true,
  },

  Etat_client: {
    type: db.Sequelize.ENUM("A", "I"),
    defaultValue: "A",
  },
});

Client.listeClient = async (p_id, req, res, next) => {
  const lesClients = await Client.findAll({ where: { Id_Artiste: p_id } });
  return lesClients;
};

Client.listeClient_id = async (p_id_client, req, res, next) => {
  const lesClients = await Client.findAll({
    where: { Id_client: p_id_client },
  });
  return lesClients;
};

Client.creater = async (
  p_nom,
  p_prenom,
  p_surnom,
  p_communication,
  p_cellulaire,
  p_courriel,
  p_artiste,
  p_enable,

  req,
  res,
  next
) => {
  await Client.create({
    Nom_client: p_nom,
    Prenom_client: p_prenom,
    Surnom_client: p_surnom,
    Communication_client: p_communication,
    Telephone_client: p_cellulaire,
    Courriel_client: p_courriel,
    Id_Artiste: p_artiste,
    Etat_client: p_enable,
  });
};

Client.trouverClient = async (p_id, res, req, next) => {
  // console.log(p_id)
  await Client.findOne({ where: { Id_Client: p_id } });
};

Client.updateInfo = async (
  p_id,
  p_nom,
  p_prenom,
  p_surnom,
  p_communication,
  p_cellulaire,
  p_courriel,
  p_enable,
  res,
  req,
  next
) => {
  console.log(
    "-------------------------------c'est rentré 2-------------------------------"
  );
  console.log(p_id);
  console.log(p_nom);
  console.log(p_prenom);
  console.log(p_surnom);
  console.log(p_communication);
  console.log(p_cellulaire);
  console.log(p_courriel);
  console.log(p_enable);

  const test = await Client.update(
    {
      Nom_client: p_nom,
      Prenom_client: p_prenom,
      Surnom_client: p_surnom,
      Communication_client: p_communication,
      Telephone_client: p_cellulaire,
      Courriel_client: p_courriel,
      Etat_client: p_enable,
    },
    {
      where: { Id_Client: p_id },
    }
  );
  console.log(test);
};

module.exports = Client;
