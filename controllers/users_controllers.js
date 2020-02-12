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


