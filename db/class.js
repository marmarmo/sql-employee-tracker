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
		VALUES ("${employeeFirstName}", "${employeeLastName}", ${employeeRole}, ${employeeManager});`)
	}
	updateEmployee (roleId,id) {
		return this.db.promise().query("UPDATE employees SET role_id = ? WHERE id = ?", [roleId, id])
	}
	updateManager (managerId,id) {
		return this.db.promise().query("UPDATE employees SET manager_id = ? WHERE id = ?", [managerId, id])
	}
	getManagers (id) {
		return this.db.promise().query("SELECT * FROM employees WHERE id != ?", id)
	}
	viewEmployeesMan () {
		return this.db.promise().query("")
	}
	viewEmployees () {
		return this.db.promise().query("SELECT employees.first_name, employees.last_name, departments.department_name AS departments FROM employees LEFT JOIN roles ON employees.role_id = roles.id LEFT JOIN departments on roles.department_id = departments.id")
	}
	nameDeleteEmployee (employeeId, id) {
		return this.db.promise().query(`DELETE FROM employees WHERE id = ?`, [employeeId, id])
	}
};

module.exports = new EmployeeTracker(db);