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
