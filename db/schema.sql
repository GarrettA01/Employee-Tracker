DROP DATABASE IF EXISTS department_db;
CREATE DATABASE department_db;
USE department_db;

CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL
);

CREATE TABLE role (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT,
    FOREIGN KEY department_id
    REFERENCES department(id)
    ON DELETE SET NULL
);

CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT,
    FOREIGN KEY role_id
    REFERENCES role(id)
    ON DELETE SET NULL
);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES
("Jack", "Robert", 1, null), ("Jenn", "Marshall", 2, 1),
("Michael", "Getz", 3, null), ("Heather", "Ann", 4, 3),
("Steven", "Anderson", 5, null,), ("Gary", "Roark", 6, 5),
("Jamie", "Lynn", 7, null), ("Lindsay", "Adams", 8, 7),
("Melanie", "Walker", 9, null);