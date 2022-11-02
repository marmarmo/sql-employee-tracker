const db = require('./connection');

class EmployeeTracker {
	constructor (db) {
		this.db = db
	}
	showDepartments (){
		return this.db.promise().query("SELECT * FROM departments")
	}
	showRoles (){
		return this.db.promise().query("SELECT * FROM roles")
	}
	showEmployees (){
		return this.db.promise().query("SELECT * FROM employees")
	}
	addDepartment (departmentName){
		return this.db.promise().query(`INSERT INTO departments (department_name)
		VALUES
		("${departmentName}");`)
	}
	addRole (roleName, roleSalary, roleDepartment) {
		return this.db.promise().query(`SELECT employee roles (job_title, salary, department_id, department_name)
		VALUES ("${roleName, roleSalary, roleDepartment}");`)
	}
	addEmployee (employeeFirstName, employeeLastName, employeeRole, employeeManager) {
		return this.db.promise().query(`INSERT INTO employees (first_name, last_name, role_id, manager_id)
		VALUES ("${employeeFirstName, employeeLastName, employeeRole, employeeManager}");`)
	}
};

module.exports = new EmployeeTracker(db);