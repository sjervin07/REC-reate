const db = require("../models");


module.exports = function(app) {

    app.post("/api/users", (request, response) => {
        db.users.create({
            firstName: request.body.firstName,
            lastName: request.body.lastName,
            birthdate: request.body.birthdate,
            email: request.body.email,
            password: request.body.password,
            bio: request.body.bio
        }).then((dbusers) => {
            response.json(dbusers)
        }).catch((error) => {
            response.json(error)
        })
    })

    app.get("/api/user_data", (request, response) => {
        db.users.findAll({})
        .then((dbusers) => {
            return response.json(dbusers)
        })
    })
};
