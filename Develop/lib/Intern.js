// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, github) {
      super(name, email, id);
      this.github = github

      this.name = name;
      this.email = email;
      this.id = id;
    }
    GetGithub() {
        return this.github;
    }
    EmployeeRole() {
        return "Engineer";
    }
}


module.exports = Intern;