USE department_db;
INSERT INTO department (name)
VALUES 
("Engineering"), ("Finance"), ("Legal"), ("Sales");

INSERT INTO role(title, salary, department_id)
VALUES
("Head Engineer", 120000, 1), ("Junior Engineer", 90000, 1),
("Lead Accountant", 80000, 2), ("Accountant", 60000, 2),
("Managing Partner", 150000, 3), ("Lawyer", 100000, 3),
("Sales Lead", 60000, 4), ("Salesman", 40000, 4);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES
