const express = require("express");
const router = express.Router();
const db = require("../models");
const passport = require("../config/passport.js");

//utilize passport authentication
//if user has valid credentials, proceed to profile page
//if user does not have valid credentials, send an error
router.post(
  "/login",
  passport.authenticate("local", { failureRedirect: "/" }),
  (request, response) => {
    console.log("return api login===>>>", request.user);
    response.redirect('/profile');
  }
);

//controller for user registration
//incorporates user info into database corresponding to user table created via sequelize in models/users.js
//If user registered = success, log user in
//else, return an error
router.post("/register", (request, response) => {
  console.log('req body===>>', request.body);
  db.User
    .create(request.body)
    .then(() => {
      response.redirect("/login");
    })
    .catch(error => {
      response.status(401).json(error);
    });
});

module.exports = router;
