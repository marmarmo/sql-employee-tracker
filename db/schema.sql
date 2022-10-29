DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

USE employees_db;

-- create parent table
CREATE TABLE departments (
	id INT NOT NULL,
	department_name VARCHAR(30) NOT NULL,
	PRIMARY KEY (id)
);

-- create roles table 
CREATE TABLE roles (
	id INTO NOT NULL AUTO_INCREMENT,
	job_title VARCHAR(30) NOT NULL,
	salary DECIMAL,
	--assign child tabe > departments (need more added)
	department_id INTO NULL,
	PRIMARY KEY (id)
);

--create employees table
CREATE TABLE employees (
	id INTO NOT NULL AUTO_INCREMENT,
	first_name VARCHAR(30),
	last_name VARCHAR(30),
	--assign child table to roles (need more)
	role_id INT NULL,
	--need to reference the id values of another employee in this table who is manager to this employee
	manager_id INT NULL,
	PRIMARY KEY (id)
);