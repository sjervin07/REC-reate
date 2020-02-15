const express = require('express');
const router = express.Router();
const db = require('../models');
const passport = require('../config/passport.js');

//utilize passport authentication
//if user has valid credentials, proceed to profile page
//if user does not have valid credentials, send an error
router.post('/api/login', passport.authenticate('local'), (request, response) => {
    console.log('return api login puta')
    response.json(request.users)
});

//controller for user registration
//incorporates user info into database corresponding to user table created via sequelize in models/users.js
//If user registered = success, log user in
//else, return an error
router.post('/api/register', (request, response) => {
    db.users.create({
        firstName: request.body.firstName,
        lastName: request.body.lastName,
        birthdate: request.body.birthdate,
        email: request.body.email,
        password: request.body.password,
        bio: request.body.bio
    }).then(() => {
        response.redirect(307, '/api/login')
    }).catch((error) => {
        response.status(401).json(error)
    })
});

//log a user out
router.get('/logout', (request, response) => {
    request.logout();
    response.redirect('/')
});

// route for getting data about user for client side
router.get('/api/user_data', (request, response) => {
    if (!request.users) {
        response.json({})
    } else {
        response.json({
            email: request.user.email,
            id: request.user.id
        })
    }
});

module.exports = router;