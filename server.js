//import inquirer
const inquirer = require('inquirer');
//import console.table package
// const cTable = require('console.table');
//import mysql
const mysql = require('mysql2');


//connet to database
const db = mysql.createConnection(
	{
		host: 'localhost',
		user: 'root',
		password: process.env.MYSQL_PASSWORD,
		database: 'employees_db'
	},
console.log('connected to the employees_db database')
);

//switch cases for each question //promises
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
//maybe should be switch statement??
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
	
//INSTRUCTOR NOTES
//class.db
//constructor(connection)
//.this connection = connection
//return this.connection.promise().query(select * FROM WHEREEVER TO WHEREVER)

//index file contains class.db

//funtion to view all deartments
//just calling class method
//import class db.viewEmployees()
//.then(call ack function(rows))
//console.log responce from database
//chain antoher .then(function loadmain prompts function)

//export.module = db.class


showDepartments = () => {

};

//funciton to view all roles
showRoles = () => {

};

//function to view all employees
showEmployees = () => {

};

//add a department
addDepartment = () => {
	inquirer.prompt([
	{
		type: "input",
		name : "departmentName",
		message: "What is the name of the department you'd like to add?",
	}
])
};

//add a role
addRole = () => {
	inquierer.prompt([
	{
		type: "input",
		name: "roleName",
		message: "What is the name of the role you'd like to add?"
	},
	{
		type: "input",
		name: "roleSalary",
		message: "What is the salary of the named role?",
	},
	{
		type: "input",
		name: "roleDepartment",
		message: "What department is the role loacted in?"
	}
])
.then((answers) => {

})
};

//add an employee
addEmployee = () => {
	inquirer.prompt([
		{
			type: "input",
			name: "employeeFirstName",
			message: "What is the first name of new employee?"
		},
		{
			type: "input",
			name: "employeeLastName",
			message: "What is the last name of new employee?"
		},
		{
			type: "input",
			name: "employeeRole",
			message: "What is the role of new employee?"
		},
		{
			type: "input",
			name: "employeeManager",
			message: "Who is the manager of new employee?"
		},
	])
	.then((answers) => {

	})
};

//update an employe role
updateEmployee = () => {

};

//update an employee manager
updateManager = () => {

};

//view all employees by department
viewEmployees = () => {

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

