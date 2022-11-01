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
	addRole (roleName) {
		return this.db.promise().query(`INSERT INTO roles (job_title, salary, department_id, department_name)
		VALUES ("${roleName}");`)
	}
};

module.exports = new EmployeeTracker(db);