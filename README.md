# Rec-reate

## Heroku Deployed
### https://rec-reate.herokuapp.com/

## YouTube Overview
### *url*

## YouTube Technical Overview
### *url*

# User Story

# Future Outlook

# Technical Overview

## Bolstering Database Security

### .sequelizerc
A .sequelizerc file was added at the beginning of the development process. This file serves to modify the default generation of a config/config.json file once sequelize is initialized. Via the use of path.resolve it generates a config/config.js file instead. As to why this step is critical is elaborated on below.

## .env
The use of a .env file enables one to log sensitive information securely. That said, the purpose of generating a config.js file over a config.json is to be able to define local development key-value pairs securely. With js, the .env variables defining the local root/user/password values can be called directly. This ensures the security of both remote and local databases. 