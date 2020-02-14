# Rec-reate

## Heroku Deployed
### https://rec-reate.herokuapp.com/

## YouTube Overview
### *url*

## YouTube Technical Overview
### *url*

# User Story

The purpose of this app is to reach out to local athletes, in the community in order to pick and establish pick up games within your sport(s) or choice. It will encourage people to build relationships, form bonds, and build leagues without the confines of park district rules. The user will create a login to be able to interact with, and form teams will other users. After teams are built they can then search for a park that works for everyone. If a user chooses not to create a login they can still look at parks, but they won't be able to build teams or join games. 

# Future Outlook
In the future we would like to be able to see the games played, the teams that are build by the users. We would also like reverse geo-code, to give out the actually address of the parks making it easier for the users to get togther to play the games. 

# Technical Overview

## Bolstering Database Security

### .sequelizerc
A .sequelizerc file was added at the beginning of the development process. This file serves to modify the default generation of a config/config.json file once sequelize is initialized. Via the use of path.resolve it generates a config/config.js file instead. As to why this step is critical is elaborated on below.

## .env
The use of a .env file enables one to log sensitive information securely. That said, the purpose of generating a config.js file over a config.json is to be able to define local development key-value pairs securely. With js, the .env variables defining the local root/user/password values can be called directly. This ensures the security of both remote and local databases. 