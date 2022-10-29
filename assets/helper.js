const inquierer = require("inquirer");
const db = require("..config/connection");
const ctable = require('console.table');
const { default: inquirer } = require("inquirer");

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
	

const addDepartment = [
	{
		type: "input",
		name : "departmentName",
		message: "What is the name of the department?",
	},
];
