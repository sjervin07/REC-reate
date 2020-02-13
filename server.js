// Requiring necessary npm packages
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
// Requiring passport
const passport = require("./config/passport");
const bodyParser = require("body-parser");
// Setting up port and requiring models for syncing
const PORT = process.env.PORT || 8642;
const db = require("./models");
const path = require("path");

// Creating express app and configuring middleware needed for authentication
const app = express();
// Parse request body as JSON
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve static content for app from public directory in app directory 
app.use(express.static("public"));
// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

//Set handlebars
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "handlebars");

// Requiring controllers
const controllers = require("./controllers/users_controllers.js")(app)
app.use(controllers);

// Syncing our database and logging a message to the user upon success
db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, () => {
        console.log(`App running on http://localhost:${PORT}`)
    });    
});
