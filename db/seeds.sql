USE employees_db;

INSERT INTO departments (department_name)
VALUES
("Team Kitty Cuddles"),
("Starry Night"),
("Georgie Porgie"),
("Magistic Mountains");

INSERT INTO roles (job_title, salary, dept_id, dept_name)
VALUES
("Rooster Ruler", 80000, 1, "Team Kitty Cuddles"),
("Mr. MoJoe", 120000, 2, "Starry Night"),
("Galentines Guide", 90000, 4, "Georgie Porgie"),
("Unicorn Uniter", 75000, 3, "Magistic Mountains"),
("Poofer Floofer", 110000, 2, "Georgie Porgie"),
("Serial Sneak", 85000, 2, "Team Kitty Cuddles");

INSERT INTO employees (first_name, last_name, role_id, man_id)
VALUES
("Nika", "Fondu", 1, NULL),
("Blake", "Snake", 2, 1),
("Phil", "Miller", 3, 2),
("Aria", "Klose", 4, NULL),
("Amber", "Gelding", 5, 2),
("Peewee", "Mustachio", 6, 3);