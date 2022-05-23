const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
let Utilisateur = require('../model/utilisateur.js');

const helpers = require('../lib/helpers.js');

passport.use('local.signin', new LocalStrategy({
    usernameField: 'Nom_utilisateur',
    passwordField: 'Mot_de_passe_utilisateur',
    passReqToCallback: true
}, async(req, Nom_utilisateur, Mot_de_passe_utilisateur, done) =>{
    const rows = await Utilisateur.findAll( {where: {Nom_utilisateur : Nom_utilisateur }});
    // console.log('ROWS');
    // console.log(rows);
    if ( rows.length > 0 ) {
        const user = rows[0];
        const validPassword = await helpers.matchPassword(Mot_de_passe_utilisateur, user.Mot_de_passe_utilisateur);
        if ( validPassword ){
            done(null, user, req.flash('success', 'Welcome' + user.fullname));
        } else {
            done(null, false, req.flash( 'message', 'Incorrect' ));
        }
    } else {
        return done(null, false, req.flash('message', 'The username does not exists'));
    }
}));

passport.use('local.signup', new LocalStrategy({
    usernameField: 'Nom_utilisateur',
    passwordField: 'Mot_de_passe_utilisateur',
    passReqToCallback: true
}, async(req, Nom_utilisateur, Mot_de_passe_utilisateur, done) => {
    const { Id_artiste, Etat_utilisateur } = req.body;
    /*
    console.log("Id_artiste");
    console.log(Id_artiste);
    console.log("Etat_utilisateur");
    console.log(Etat_utilisateur);
    */
    const newUser = {
        Nom_utilisateur,
        Mot_de_passe_utilisateur,
        Id_artiste,
        Etat_utilisateur
    };
    newUser.Mot_de_passe_utilisateur = await helpers.encryptPassword(Mot_de_passe_utilisateur);

    const result = await Utilisateur.create({Nom_utilisateur: Nom_utilisateur,
        Mot_de_passe_utilisateur: newUser.Mot_de_passe_utilisateur,
        Id_Artiste: Id_artiste,
        Etat_utilisateur: Etat_utilisateur});
    /*
    console.log("result");
    console.log(result);
*/
    newUser.Id_utilisateur = result.Id_utilisateur;
  //  console.log('newUser.Id_utilisateur');
  //  console.log(newUser.Id_utilisateur);
    return done(null, newUser);
}));

passport.serializeUser((user, done) => {
    // console.log("id_user");
    // console.log(user.Id_utilisateur);
    done(null, user.Id_utilisateur);
});

passport.deserializeUser( async(id, done) => {
    const param = await Utilisateur.findAll( {where: {Id_utilisateur: id }});
    done(null, param[0]);
}); 