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
	department_id INTO NULL,
	PRIMARY KEY (id)
);

--create employees table
CREATE TABLE employees (
	id INTO NOT NULL AUTO_INCREMENT,
	first_name VARCHAR(30),
	last_name VARCHAR(30),
	role_id INT NULL,
	manager_id INT NULL,
	PRIMARY KEY (id)
);