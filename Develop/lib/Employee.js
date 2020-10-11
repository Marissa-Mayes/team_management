// TODO: Write code to define and export the Employee class
class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    EmployeeName() {
        return this.name;
    }
    EmployeeId() {
        return this.id;
    }
    EmployeeEmail() {
        return this.email;
    }
    EmployeeRole() {
        return "Employee";
    }
}

module.exports = Employee;