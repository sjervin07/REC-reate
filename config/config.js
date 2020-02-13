require('dotenv').config();

module.exports = {
  development: {
    username: "root",
    password: "Wordpass3!!!992",
    database: "parks_db",
    host: "127.0.0.1",
    dialect: "mysql"
  },
  test: {
    username: "f2eqb0ai0hjkisot",
    password: "g21mlsejub645ceu",
    database: "umblvi0iipa33ins",
    host: "c584md9egjnm02sk.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    dialect: "mysql"
  },
  production: {
    username: "f2eqb0ai0hjkisot",
    password: "g21mlsejub645ceu",
    database: "umblvi0iipa33ins",
    host: "c584md9egjnm02sk.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    dialect: "mysql"
  }
  // production: {
  //   use_env_variable: "JAWSDB_URL",
  //   dialect: "mysql"
  // }
};
