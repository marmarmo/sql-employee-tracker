const db = require('./connection');

class EmployeeTracker {
	constructor (db) {
		this.db = db
	}
	showDepartments (){
		return this.db.promise().query("SELECT * FROM departments")
	}
	showRoles (){
		return this.db.promise().query("SELECT roles.id, roles.job_title, roles.salary, departments.department_name FROM roles CROSS JOIN departments ON roles.department_id = departments.id;")
	}
	showEmployees (){
		return this.db.promise().query(`SELECT 
		employees.id,
		employees.first_name,
		employees.last_name,
		roles.job_title,
		departments.department_name,
		roles.salary,
		CONCAT(manager.first_name, " ", manager.last_name) AS manager
	FROM employees 
	LEFT JOIN roles
	ON employees.role_id = roles.id
	LEFT JOIN departments
	ON roles.department_id = departments.id
	LEFT JOIN employees manager
	ON manager.id = employees.manager_id;`)
	}
	addDepartment (departmentName){
		return this.db.promise().query(`INSERT INTO departments (department_name)
		VALUES
		("${departmentName}");`)
	}
	addRole (roleName, roleSalary, deptId) {
		return this.db.promise().query(`INSERT INTO roles (job_title, salary, department_id)
		VALUES ("${roleName}", ${roleSalary}, ${deptId});`)
	}
	addEmployee (employeeFirstName, employeeLastName, employeeRole, employeeManager) {
		return this.db.promise().query(`INSERT INTO employees (first_name, last_name, role_id, manager_id)
		VALUES (${employeeFirstName}, ${employeeLastName}, ${employeeRole}, ${employeeManager});`)
	}
};

module.exports = new EmployeeTracker(db);