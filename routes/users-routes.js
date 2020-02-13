const db = require("../models");
const express = require("express");
// const router = express.Router();

// router.get("/", async (request, response) => {
//     try {
//        const results =  await db.users.findAll({})
//        const hbsObj = {
//            users : results
//        };
//        if (Array.isArray(results) && results.length) {
//            console.log(hbsObj)
//            response
//                 .status(200)
//                 .render("users", hbsObj)
//        } else {
//            return response
//                 .status(404)
//                 .send("users array not found")
//                 .end()
//        }
//     }
//     catch (error) {
//         response
//             .status(500)
//             .send("error occurred")
//             throw error
//     }
// });

// module.exports = router;

module.exports = function (app) {

    app.get("/api/users", (request, response) => {
        db.users.findAll({}).then((dbUsers) => {
            response.json(dbUsers)
        })
    })
};
