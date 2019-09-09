DROP DATABASE IF EXISTS greenfield_db;

CREATE DATABASE greenfield_db;

USE greenfield_db;

-- CREATE TABLE IF NOT EXISTS  (
--   id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--   url VARCHAR(255),
--   baseUrl VARCHAR(255),
--   code VARCHAR(5),
--   title VARCHAR(255),
--   visits INT NOT NULL DEFAULT 0
-- );

-- CREATE TABLE IF NOT EXISTS  (
-- id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
-- linkId INT
-- );

CREATE TABLE users (
id int NOT NULL AUTO_INCREMENT,
username VARCHAR(40) UNIQUE,
password VARCHAR(64),
PRIMARY KEY (ID)
);

CREATE TABLE deposit (
id INT NOT NULL AUTO_INCREMENT,
checkNumber INT,
date VARCHAR(10),
created VARCHAR(250),
amount INT,
deci INT,
category VARCHAR(50),
notes VARCHAR(100),
account VARCHAR(50),
PRIMARY KEY(id)
);

CREATE TABLE accounts (
id INT NOT NULL AUTO_INCREMENT,
account VARCHAR(50),
PRIMARY KEY(id)
);


-- CREATE TABLE IF NOT EXISTS  (
-- id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
-- hash VARCHAR(64),
-- userId INT
-- );
