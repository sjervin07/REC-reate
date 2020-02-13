const db = require("../models");
const express = require("express");
const router = express.Router();

router.get("/users", async (request, response) => {
    try {
       const results =  await db.users.findAll({})
       const hbsObj = {
           users : results
       };
       if (Array.isArray(results) && results.length) {
           console.log(hbsObj)
           response
                .status(200)
                .render("index", hbsObj)
       } else {
           return response
                .status(404)
                .send("users array not found")
       }
    }
    catch (error) {
        response
            .status(500)
            .send("error occurred")
            throw error
    }
});

router.post('/api/users', async (request, response) => {
    try {
        const userData = {
            firstName: request.body.firstName,
            lastName: request.body.lastName,
            birthdate: request.body.birthdate,
            email: request.body.email,
            password: request.body.password,
            bio: request.body.bio
        }
        const result = await db.users.create(userData)
        if (result) {
            response.status(201).json(result)
        } else {
            return response
                .status(404)
                .send("the user was not added successfully")
        }
        
    } catch (error) {
            if (error) {
                console.log(error)
                response
                    .status(500)
                    .send("error occurred")
                    throw error
            }
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
