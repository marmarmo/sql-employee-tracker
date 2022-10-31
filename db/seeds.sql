INSERT INTO departments (department_name)
VALUES
("Team Kitty Cuddles"),
("Starry Night"),
("Georgie Porgie"),
("Magistic Mountains");

INSERT INTO roles (job_title, salary, department_id)
("Rooster Ruler", 80000, 1),
("Mr. MoJoe", 120000, 2),
("Galentines Guide", 90000, 6),
("Unicorn Uniter", 75000, 3),
("Poofer Floofer", 110000, 2),
("Serial Sneak", 85000, 8);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
("Nika", "Fondu", 1, 7),
("Blake", "Snake", 2, NULL),
("Phil", "Miller", 3, 11),
("Aria", "Klose", 4, NULL),
("Amber", "Gelding", 5, 2),
("Peewee", "Mustachio", 6, 9);