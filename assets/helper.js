const inquierer = require("inquirer");
const db = require("..config/connection");

const startQuestion = [
	{
		type: "list",
		message: "Select what you would like to do.",
		choices: [
			"View all departments",
			"view all roles",
			"view all employees",
			"add a department",
			"add a role",
			"add an employee",
			"update an employee role",
			"add an employee",
			"delete an employee",
			"exit",
		],
	}
];

const addDeptQuetion = [
	{
		type: "input",
		message: "What is the name of the department?",
		name : "departmentName",
	},
];
