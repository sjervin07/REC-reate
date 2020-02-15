const express = require('express');
const router = express.Router();

const isAuthenticated = require('../config/middleware/isAuthenticated');

router.get('/', (request, response) => {
    //if user has account send them to profile page
    if (request.users) {
        response.render('profile', { layout: 'main.handlebars' })
    }
    //if no account send user to index
    else {
        response.render('index', { layout: 'main.handlebars' })
    }
});

router.get('/register', (request, response) => {
    response.render('register', { layout: 'main.handlebars' })
});

router.get('/login', (request, response) => {
    //If user has an account send to profile; else, send to index
    if (request.users) {
        response.redirect('/profile')
    }
    else {
        response.render('index', { layout: 'main.handlebars' })
    }
});

//isAuthenticated middleware utilized here
//if user is not logged in and tries to access profile they will be redirected to signup page
router.get('/profile', isAuthenticated, (request, response) => {
    response.render('profile', { layout: 'main.handlebars' })
});

module.exports = router;