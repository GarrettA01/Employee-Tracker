DROP DATABASE IF EXISTS department_db;
CREATE DATABASE department_db;
USE department_db;

CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL
)