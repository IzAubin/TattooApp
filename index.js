require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const route = require("./src/routes/site");
var path = require("path");
let db = require("./src/model/db.js");
let Toutmodel = require("./src/model/toutmodel.js");
let session = require("express-session");
let passport = require("passport");
const flash = require("connect-flash");
const fileUpload = require('express-fileupload');


let passportMiddleware = require("./src/middleware/passport.js");
let LocalStrategy = require("passport-local").Strategy;

// initializations
const app = express();
require("./src/lib/authpassport.js");
app.use(fileUpload());

// settings
app.set("port", process.env.PORT || 4000);
app.set("views", path.join(__dirname, "/src/views"));
app.set("view engine", "pug");
app.use('./public/images', express.static('images'));

// Middlewares

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: process.env.KEY_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// Global variables
app.use((req, res, next) => {
  success = req.flash("success");
  message = req.flash("message");
  app.locals.user = req.user;
  next();
});

//routes
app.use(route);

// Public
app.use(express.static("public"));

//(async () => {
//  await db.sequelize.sync({ force: true });
//})();

// Starting the server
app.listen(app.get("port"), () => {
  console.log(`BookInk app hosted on: http://localhost:${process.env.PORT}`);
});

module.exports = app;