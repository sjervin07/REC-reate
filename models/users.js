'use strict';

const bcrypt = require("bcryptjs");

module.exports = function(sequelize, Datatypes) {
    const users = sequelize.define("users", {
        id: {
            type: Datatypes.INTEGER(11),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        firstName: Datatypes.STRING,
        lastName: Datatypes.STRING,
        birthdate: Datatypes.DATE,
        email: {
            type: Datatypes.STRING,
            validate: /\S+@\S+\.\S+/
        },
        password: {
            type: Datatypes.STRING,
            //password input must be between 6 and 50 characters in length, may use upper/lowercase, may use numbers, may use special chars
            validate: /^[0-9A-Za-z!@.,;:'"?-]{6,50}\z/
        },
        bio: {
            type: Datatypes.STRING,
            allowNull: true,
            //bio character length set to 450; allowNull = true
            validate: /^[0-9A-Za-z!@.,;:'"?-]{0,450}\z/
        },
        createdAt: {
            type: Datatypes.DATE(3),
            allowNull: false,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP(3)')
        },
        updatedAt: {
            type: Datatypes.DATE(3),
            allowNull: false,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP(3)')
        }
    })
    users.prototype.validPassword = (password) => {
        return bcrypt.compareSync(password, this.password)
    };
    users.addHook("beforeCreate", (user) => {
        user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null)
    });
    return users;
};

// CREATE TABLE users (
//     id INT AUTO_INCREMENT NOT NULL,
//     firstName VARCHAR(30) NOT NULL,
//     lastName VARCHAR(40) NOT NULL,
//     birthdate date,
//     email VARCHAR(60),
//     bio VARCHAR(500),
//     PRIMARY KEY (id)
// );