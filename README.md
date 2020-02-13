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
A .sequelizerc file was added at the beginning of the development process. This file serves to modify the generation of a config/config.json file once sequelize is initiated. Instead, it generates a config/config.js file. This is achieved via the use of path.resolve, overriding the default json generation. As to why this is critical will be elaborated on below.

## .env
The use of a .env file enables one to log security-sensitive information. The local development  