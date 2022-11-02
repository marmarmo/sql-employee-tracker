//import inquirer
const inquirer = require('inquirer');
//import console.table package
const cTable = require('console.table');
//import classes
const db = require('./db/class');


const promptUser = () => {
	inquirer.prompt ([
	{
		type: "list",
		name: "choices",
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
			updateEmployeeRole();
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
	

const showDepartments = () => {
db.showDepartments().then(([data]) => {
	console.table(data);
}).then(() => promptUser())
};

//funciton to view all roles
const showRoles = () => {
	db.showRoles().then(([data]) => {
		console.table(data);
	}).then(() => promptUser())
};

//function to view all employees
const showEmployees = () => {
	db.showEmployees().then(([data]) => {
		console.table(data);
	}).then(() => promptUser())
};

//function to add a department
const addDepartment = () => {
	inquirer.prompt([
	{
		type: "input",
		name : "departmentName",
		message: "What is the name of the department you'd like to add?",
	}
]).then((answers) => {
db.addDepartment(answers.departmentName).then(() => console.log(`Successfully addded ${answers.departmentName}`)).then(() => promptUser())
})
};

//functinon to add a role
const addRole = () => {
	db.showDepartments().then(([data]) => {
		const departmentChoices = data.map((department) => {
		return {name: department.department_name, value: department.id}
		})
		console.log(departmentChoices)
		inquirer.prompt([
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
				type: "list",
				name: "roleDepartment",
				message: "What department is the role loacted in?",
				choices: departmentChoices
			}
		])
		.then(({roleName, roleSalary, roleDepartment}) => {
			let deptId;
			for (var dept of departmentChoices) {
				if ((dept.name = roleDepartment)) {
					deptId = dept.value;
				}
			}
		db.addRole(roleName, roleSalary, deptId).then(() => console.log (`Successfully added ${roleName, roleSalary, roleDepartment}`)).then(() => promptUser())
		})
	})
};

//add an employee // only shoing first name of manager choices and not showing roles list at all // not being added to employee list
const addEmployee = () => {
	db.showEmployees().then(([data]) => {
		const managerChoices = data.map((employees) => {
		return {name: employees.manager, value: employees.id}
		})
		console.log(managerChoices)
	db.showRoles().then(([data]) => {
		const roleChoices = data.map((roles) => {
			return {name: roles.job_title, value: roles.id}
		})
		console.log(roleChoices);
	})
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
			type: "list",
			name: "employeeRole",
			message: "Select the role of new employee?",
			choices: roleChoices
		},
		{
			type: "list",
			name: "employeeManager",
			message: "Who is the manager of new employee?",
			choices: managerChoices
		},
	])
	.then(({employeeFirstName, employeeLastName, employeeRole, employeeManager}) => {
		let manId;
		for (var man of managerChoices) {
			if ((man.name = employeeFirstName)) {
				manId = man.value;
			}
		}
		let empId;
		for (var emp of roleChoices) {
			if ((emp.name = employeeFirstName)) {
				empId = emp.value;
			}
		}
		db.showEmployees(employeeFirstName, employeeLastName, employeeRole, manId).then(() =>
		console.log(`Sucessfully added ${employeeFirstName, employeeLastName, employeeRole, employeeManager}`)).then(() => promptUser())
	})
})
};

//update an employe role
const updateEmployeeRole = () => {
	db.showEmployees().then(([data]) => {
		const employeeChoices = data.map((employee) => {
			return {name: employee.last_name, value: employee.id}
		})
		console.log(employeeChoices)
		inquirer.prompt([
			{
				type: "list",
				name: "updateEmployeePrompt",
				message: "select the employee you'd like to update.",
				choices: employeeChoices
			}
		])
		.then(({updateEmployeePrompt}) => {
			
		})
	})
}



//update an employee manager
const updateManager = () => {

};

//view all employees by department
const viewEmployees = () => {

};

//delete a department
const deleteDepartment = () => {

}

//delete a role
const deleteRole = () => {
	db.showRoles().then(([data]) => {
		console.table(data);
	}).then(() => promptUser())
};

//delete an employee
const deleteEmployee = () => {
db.showEmployees().then(([data]) => {
		console.table(data);
	}).then(() => promptUser())
};

//view all departments budgets
const viewBudgets = () => {

};

promptUser();