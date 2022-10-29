//import inquirer
const inquierer = require("inquirer");
// const db = require("..config/connection"); do i need?
//import console.table package
const ctable = require('console.table');
//import mysql
const mysql = require('mysql2');

const promptUser = () => {
	inquirer.prompt ([
	{
		type: "list",
		message: "Select what you would like to do.",
		choices: [
			"View all departments",
			"View all roles",
			"View all employees",
			"Add a department",
			"Add a role",
			"Add an employee",
			"Update an employee role",
			"Update an employee manager",
			"View employees by department",
			"Delete a department",
			"Delete a role",
			"Delete an employee",
			"View department budgets",
			"Exit"
		]
	}
])
	.then((answers) => {
		const { choices } = answers;

		if (choices === "View all departments") {
			showDepartments();
		}

		if (choices === "View all roles") {
			showRoles();
		}

		if (choices === "View all employees") {
			showEmployees();
		}
		if (choices === "Add a department") {
			addDepartment();
		}

		if (choices === "Add a role") {
			addRole();
		}

		if (choices === "Add an employee") {
			addEmployee();
		}

		if (choices === "Update an employee role") {
			updateEmployee();
		}

		if (choices === "Update an employee manager") {
			updateManager();
		}

		if (choices === "View employees by department") {
			viewEmployees();
		}

		if (choices === "Delete a department") {
			deleteDepartment();
		}

		if (choices === "Delete a role") {
			deleteRole();
		}

		if (choices === "Delete an employee") {
			deleteEmployee();
		}

		if (choices === "View department budgets") {
			viewBudgets();
		}

		if (choices === "Exit") {
			connection.end();
		}
	})
};
	
//funtion to view all deartments
showDepartments = () => {

};

//funciton to view all roles
showRoles = () => {

};

//function to view all employees
showEmployees = () => {

};

//add a department
const addDepartment = [
	{
		type: "input",
		name : "departmentName",
		message: "What is the name of the department?",
	},
];

//add a role
const addRole = () => {

};

//add an employee
const addEmployee = () => {

};

//update an employe role
updateEmployee = () => {

};

//update an employee manager
const updateManager = () => {

};

//view all employees by department
const viewEmployees = () => {

};

//delete a department
deleteDepartment = () => {

}

//delete a role
deleteRole = () => {

};

//delete an employee
deleteEmployee = () => {

};

//view all departments budgets
viewBudgets = () => {

};

