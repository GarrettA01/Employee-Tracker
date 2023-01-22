const mysql = require("mysql2");
const inquirer = require("inquirer");
const consoleTable = require("console.table");
const art = require("ascii-art");

require("dotenv").config();

const connection = mysql.createConnection({
  host: "localhost",
  // MySQL username,
  user: process.env.DB_USER,
  // MySQL password
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

const initialize = () => {
  art.font("Employee Tracker", "doom").then((rendered) => {
    console.log(rendered);
    app();
  });
};

const app = () => {
  inquirer
    .prompt([
      {
        message: "What would you like to do?",
        type: "list",
        name: "options",
        choices: [
          "View All Employees",
          "Add Employee",
          "Update Employee Role",
          "Update Manager",
          "View All Roles",
          "Add Role",
          "View All Departments",
          "Add Department",
          "Close",
        ],
      },
    ])
    .then((response) => {
      switch (response.options) {
        case "View All Employees":
          viewEmployees();
        case "Add Employee":
          addEmployee();
        case "Update Employee Role":
          updateEmployee();
        case "Update Manager":
          updateManager();
        case "View All Roles":
          viewRoles();
        case "Add Role":
          addRole();
        case "View All Departments":
          viewDepartments();
        case "Add Department":
          addDepartment();
        case "Close":
          connection.end();
      }
    });
};

//VIEW OPTIONS
const viewEmployees = () => {
  connection.query(
    "SELECT employee.id, first_name, last_name, title, salary, name, manager_id FROM ((department JOIN role ON department.id = role.department_id) JOIN employee ON role.id = employee.role_id);",
    function (err, res) {
      if (err) throw err;
      console.table(res);
      menu();
    }
  );
};

const viewRoles = () => {
  connection.query("SELECT id, title, salary FROM role", function (err, res) {
    if (err) throw err;
    console.table(res);
    menu();
  });
};

const viewDepartments = () => {
  connection.query("SELECT id, name FROM department", function (err, res) {
    if (err) throw err;
    console.table(res);
    menu();
  });
};

//ADD OPTIONS
const addDepartment = () => {
  inquirer
    .prompt([
      {
        message: "Enter the name of the department you would like to add.",
        type: "input",
        name: "newDept",
      },
    ])
    .then((response) => {
      connection.query(
        "INSERT INTO department (name) VALUES (?)",
        [response.newDept],
        function (err, res) {
          if (err) throw err;
          console.log("Successfully added new department.");
          menu();
        }
      );
    });
};

const addRole = () => {
  inquirer
    .prompt([
      {
        message: "Enter the name of the role title you would like to add.",
        type: "input",
        name: "roleTitle",
      },
      {
        message: "Enter the salary amount of the new role.",
        type: "input",
        name: "roleSalary",
      },
      {
        message: "Enter this new role's department id.",
        type: "input",
        name: "roleDept",
      },
    ])
    .then((response) => {
      connection.query(
        "INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)",
        [response.roleTitle, response.roleSalary, response.roleDept],
        function (err, res) {
          if (err) throw err;
          console.log("Successfully added new role.");
          menu();
        }
      );
    });
};
