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
        name: "choices",
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
      switch (response.choices) {
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
