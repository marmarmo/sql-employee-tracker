//import inquirer
const inquirer = require("inquirer");
//import console.table package
const cTable = require("console.table");
//import classes
const db = require("./db/class");

const promptUser = () => {
  inquirer
    .prompt([
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
          "Exit",
        ],
      },
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
    });
};

const showDepartments = () => {
  db.showDepartments()
    .then(([data]) => {
      console.table(data);
    })
    .then(() => promptUser());
};

//funciton to view all roles
const showRoles = () => {
  db.showRoles()
    .then(([data]) => {
      console.table(data);
    })
    .then(() => promptUser());
};

//function to view all employees
const showEmployees = () => {
  db.showEmployees()
    .then(([data]) => {
      console.table(data);
    })
    .then(() => promptUser());
};

//function to add a department
const addDepartment = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "departmentName",
        message: "What is the name of the department you'd like to add?",
      },
    ])
    .then((answers) => {
      db.addDepartment(answers.departmentName)
        .then(() =>
          console.log(`Successfully addded ${answers.departmentName}`)
        )
        .then(() => promptUser());
    });
};

//functinon to add a role
const addRole = () => {
  db.showDepartments().then(([data]) => {
    const departmentChoices = data.map((department) => {
      return { name: department.department_name, value: department.id };
    });
    console.log(departmentChoices);
    inquirer
      .prompt([
        {
          type: "input",
          name: "roleName",
          message: "What is the name of the role you'd like to add?",
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
          choices: departmentChoices,
        },
      ])
      .then(({ roleName, roleSalary, roleDepartment }) => {
        // let deptId;
        // for (var dept of departmentChoices) {
        // 	if ((dept.name = roleDepartment)) {
        // 		deptId = dept.value;
        // 	}
        // }
        db.addRole(roleName, roleSalary, roleDepartment)
          .then(() =>
            console.log(
              `Successfully added ${(roleName, roleSalary, roleDepartment)}`
            )
          )
          .then(() => promptUser());
      });
  });
};

//add an employee // only shoing first name of manager choices and not showing roles list at all // not being added to employee list
const addEmployee = () => {
  db.showEmployees().then(([data]) => {
    const managerChoices = data.map((employees) => {
      return {
        name: `${employees.first_name} ${employees.last_name}`,
        value: employees.id,
      };
    });

    console.log(managerChoices);
    db.showRoles().then(([data]) => {
      const roleChoices = data.map((roles) => {
        return { name: roles.job_title, value: roles.id };
      });

      inquirer
        .prompt([
          {
            type: "input",
            name: "employeeFirstName",
            message: "What is the first name of new employee?",
          },
          {
            type: "input",
            name: "employeeLastName",
            message: "What is the last name of new employee?",
          },
          {
            type: "list",
            name: "employeeRole",
            message: "Select the role of new employee?",
            choices: roleChoices,
          },
          {
            type: "list",
            name: "employeeManager",
            message: "Who is the manager of new employee?",
            choices: managerChoices,
          },
        ])
        .then(
          ({
            employeeFirstName,
            employeeLastName,
            employeeRole,
            employeeManager,
          }) => {
            db.addEmployee(
              employeeFirstName,
              employeeLastName,
              employeeRole,
              employeeManager
            )
              .then(() =>
                console.log(
                  `Sucessfully added ${
                    (employeeFirstName,
                    employeeLastName,
                    employeeRole,
                    employeeManager)
                  }`
                )
              )
              .then(() => promptUser());
          }
        );
    });
  });
};

//update an employe role
const updateEmployeeRole = () => {
  db.showEmployees().then(([data]) => {
    const employeeChoices = data.map((employee) => {
      return {
        name: `${employee.first_name} ${employee.last_name}`,
        value: employee.id,
      };
    });
    console.log(employeeChoices);
    inquirer
      .prompt([
        {
          type: "list",
          name: "employeeId",
          message: "select the employee you'd like to update.",
          choices: employeeChoices,
        },
      ])
      .then(({ employeeId }) => {
        db.showRoles().then(([data]) => {
          const roleChoices = data.map((roles) => {
            return { name: roles.job_title, value: roles.id };
          });

          inquirer
            .prompt([
              {
                type: "list",
                name: "roleId",
                message: "select the employee you'd like to update.",
                choices: roleChoices,
              },
            ])
            .then(({ roleId }) => {
              db.updateEmployee(roleId, employeeId)
                .then(() => {
                  console.log("succesfully updated employee role");
                })
                .then(() => promptUser());
            });
        });
      });
  });
};

//update an employee manager
const updateManager = () => {
  db.showEmployees().then(([data]) => {
    const employeeChoices = data.map((employee) => {
      return {
        name: `${employee.first_name} ${employee.last_name}`,
        value: employee.id,
      };
    });
    console.log(employeeChoices);
    inquirer
      .prompt([
        {
          type: "list",
          name: "employeeId",
          message: "Which employee would you like to update?",
          choices: employeeChoices,
        },
      ])
      .then(({ employeeId }) => {
        db.getManagers(employeeId).then(([data]) => {
          const managerChoices = data.map((employee) => {
            return {
              name: `${employee.first_name} ${employee.last_name}`,
              value: employee.id,
            };
          });

          inquirer
            .prompt([
              {
                type: "list",
                name: "managerId",
                message: "Who is the new manager of the employee?",
                choices: managerChoices,
              },
            ])
            .then(({ managerId }) => {
              db.updateManager(managerId, employeeId)
                .then(() => {
                  console.log("succesfully updated employee manager");
                })
                .then(() => promptUser());
            });
        });
      });
  });
};

//view all employees by department
const viewEmployees = () => {};

//delete a department
const deleteDepartment = () => {};

//delete a role
const deleteRole = () => {
  db.showRoles()
    .then(([data]) => {
      console.table(data);
    })
    .then(() => promptUser());
};

//delete an employee
const deleteEmployee = () => {
  db.showEmployees()
    .then(([data]) => {
      console.table(data);
    })
    .then(() => promptUser());
};

//view all departments budgets
const viewBudgets = () => {};

promptUser();
