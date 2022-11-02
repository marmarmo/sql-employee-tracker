DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE departments (
	id INTEGER NOT NULL AUTO_INCREMENT,
	department_name VARCHAR(30),
	PRIMARY KEY (id)
);

CREATE TABLE roles (
	id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
	job_title VARCHAR(30),
	salary DECIMAL,
	department_id INTEGER,
	department_name VARCHAR(30),
	CONSTRAINT fk_department FOREIGN KEY (department_id) REFERENCES departments(id) ON DELETE SET NULL
);

CREATE TABLE employees (
	id INT AUTO_INCREMENT PRIMARY KEY,
	first_name VARCHAR(30),
	last_name VARCHAR(30),
	role_id INTEGER NOT NULL,
	CONSTRAINT fk_role FOREIGN KEY (role_id) REFERENCES roles(id) ON DELETE CASCADE,
	manager_id INTEGER,
	CONSTRAINT fk_manager FOREIGN KEY (manager_id) REFERENCES employees(id) ON DELETE SET NULL
);
