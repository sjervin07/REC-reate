'use strict';

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
        email: Datatypes.STRING,
        bio: Datatypes.STRING,
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