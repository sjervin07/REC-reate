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

SELECT * FROM parks;