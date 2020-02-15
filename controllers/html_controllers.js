const express = require("express");
const router = express.Router();
const db = require("../models");
const isAuthenticated = require("../config/middleware/isAuthenticated");

router.get("/", async (request, response) => {
  //if user has account send them to profile page
  try {
    const results = await db.Park.findAll({ raw: true });
    // const results = await db.Park.findAll({ raw: true, attributes: [[db.Sequelize.literal('DISTINCT `${facility_name}`'], 'facility_name'] });
    //for (let i=0; i < results.length; i++) 
    // console.log('parkssssssss===>>', results);
    // console.log('yyyyyyy=====>', request.results.facility_name[i])
    //https://sequelize.org/master/manual/model-querying-basics.html
    response.render("index", { parks: results, loggedInUser: request.user });
  } catch (error) {
    response.status(500).send("error occurred");
    throw error;
  }
});

router.get("/register", (request, response) => {
  response.render("register", { loggedInUser: request.user });
});

router.get("/login", (request, response) => {
  //If user has an account send to profile; else, send to index
  if (request.user) {
    response.redirect("/profile");
  } else {
    response.render("login", { loggedInUser: request.user });
  }
});

//log a user out
router.get("/logout", (request, response) => {
  request.logout();
  response.redirect("/");
});

//isAuthenticated middleware utilized here
//if user is not logged in and tries to access profile they will be redirected to signup page
router.get("/profile", isAuthenticated, (request, response) => {
  response.render("profile", { user: request.user, loggedInUser: request.user });
});

module.exports = router;
