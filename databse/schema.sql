DROP DATABASE IF EXISTS parks_db;
CREATE database parks_db;

USE parks_db;

CREATE TABLE parks (
    id INT AUTO_INCREMENT NOT NULL,
    num INT NULL,
    facility_name VARCHAR(100) NULL,
    facility_type VARCHAR(100) NULL,
    facility_inout VARCHAR(100) NULL,
    x_coord FLOAT (20) NULL,
    y_coord FLOAT (20) NULL,
    latitude FLOAT(20) NULL,
    longitude FLOAT(20) NULL,
    PRIMARY KEY (id)
);

CREATE TABLE users (
    id INT AUTO_INCREMENT NOT NULL,
    firstName VARCHAR(30) NOT NULL,
    lastName VARCHAR(40) NOT NULL,
    birthdate date,
    email VARCHAR(60),
    bio VARCHAR(500),
    PRIMARY KEY (id)
);

SELECT * FROM parks;
SELECT * FROM users;