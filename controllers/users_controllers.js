const db = require("../models");
const express = require("express");
const router = express.Router();
//const passport = require('../config/passport.js');

router.get("/users", async (request, response) => {
  try {
    const results = await db.User.findAll({});
    if (Array.isArray(results) && results.length) {
      response.status(200).send(results);
    } else {
      return response.status(404).send("users array not found");
    }
  } catch (error) {
    response.status(500).send("error occurred");
    throw error;
  }
});

//post
router.post("/users", async (request, response) => {
  try {
    const userData = {
      firstName: request.body.firstName,
      lastName: request.body.lastName,
      birthdate: request.body.birthdate,
      email: request.body.email,
      password: request.body.password,
      bio: request.body.bio
    };
    const result = await db.User.create(userData);
    if (result) {
      response.status(201).json(result);
    } else {
      return response.status(404).send("the user was not added successfully");
    }
  } catch (error) {
    if (error) {
      console.log(error);
      response.status(500).send("error occurred");
      throw error;
    }
  }
});

router.put("/users/:id", async (request, response) => {
  try {
    // const condition = `id = ${request.params.id}`;
    console.log(request.body);
    const results = await db.User.update(
      {
        firstName: request.body.firstName,
        lastName: request.body.lastName,
        birthdate: request.body.birthdate,
        email: request.body.email,
        bio: request.body.bio
      },
      { where: { id: request.params.id } }
    );
    if (results) {
      response.status(201).json(results);
    } else {
      response.status(404).send("id not found, bio not updated");
    }
  } catch (error) {
    if (error) {
      console.log(error);
      response.status(500).send("error occurred");
      throw error;
    }
  }
});

router.delete("/users/:id", async (request, response) => {
  try {
    console.log(request.body);
    const trashed = await db.User.destroy({ where: { id: request.params.id } });
    if (trashed) {
      response.status(203).json(trashed);
    } else {
      response.status(404).send("user account not deleted");
    }
  } catch (error) {
    if (error) {
      console.log(error);
      response.status(500).send(`error occurred ${error}`);
      throw error;
    }
  }
});

// route for getting data about user for client side
router.get("/users_data", (request, response) => {
  if (!request.users) {
    response.json({});
  } else {
    response.json({
      email: request.user.email,
      id: request.user.id
    });
  }
});

module.exports = router;

// CREATE TABLE users (
//     id INT AUTO_INCREMENT NOT NULL,
//     firstName VARCHAR(30) NOT NULL,
//     lastName VARCHAR(40) NOT NULL,
//     birthdate date,
//     email VARCHAR(60),
//     password VARCHAR(50),
//     bio VARCHAR(500),
//     PRIMARY KEY (id)
// );
