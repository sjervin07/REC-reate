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
                .end()
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
        const result = {
            firstName: request.body.firstName,
            lastName: request.body.lastName,
            birthdate: request.body.birthdate,
            email: request.body.email,
            password: request.body.password,
            bio: request.body.bio
        }
        await db.users.create(result)
        // await ((dbusers) => {

        // })
        // const {firstName, lastName, birthdate, email, password, bio} = request.body
        // console.log(request.body)
        // const result = await db.users.create(['firstName', 'lastName', 'birthdate', 'email', 'password', 'bio'],
        //                 [firstName, lastName, birthdate, email, password, bio]);
        if (result.affectedRows === 0) {
            return response
                .status(404)
                .send("the user was not added successfully")
                .end()
        } else {
            console.log(result)
            console.log({id: result.insertId}, {firstName: firstName}, {lastName: lastName}, 
                {birthdate: birthdate}, {email: email}, {password: password}, {bio: bio})
            response
                .json({id: result.insertId})
                .status(200)
                .send("user added successfully")
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
