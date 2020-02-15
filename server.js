// Requiring necessary npm packages
require('dotenv').config();
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
// Requiring passport
const passport = require("./config/passport");
// Local PORT defined in .env
const PORT = process.env.PORT
const db = require("./models");

// Creating express app and configuring middleware needed for authentication
const app = express();
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve static content for app from public directory in app directory 
app.use(express.static("public"));
// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

//Set handlebars
const handlebars = require('./helpers/handlebars.js')(exphbs);
// app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.engine('handlebars', handlebars.engine)
// app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "handlebars");

// Requiring routers
const parksRouter = require("./controllers/parks_controllers.js");
const routerDos = require('./controllers/html_controllers.js');
const routerTres = require('./controllers/login-controllers.js');
//app.use('/api', parksRouter);
app.use(routerDos);
app.use('/api', routerTres);



/*
//rendering all hbrs with server
app.get('/', (request, response) => response.render('index'));
app.get('/login', (request, response) => response.render('login'));
app.get('/profile', (request, response) => response.render('profile'));
app.get('/register', (request, response) => response.render('register'));
*/

// Syncing our database and logging a message to the user upon success
db.sequelize.sync({ /*force: true*/ }).then(function() {
    app.listen(PORT, () => {
        console.log(`App running on http://localhost:${PORT}`)
    });    
});
