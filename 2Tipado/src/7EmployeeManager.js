"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createEmployee = void 0;
var crypto_1 = require("crypto");
function generateRandomId() {
    return (0, crypto_1.randomBytes)(10).toString('hex');
}
function createEmployee(employeeName, salary) {
    return {
        name: employeeName,
        id: generateRandomId(),
        // Interpolación
        email: "".concat(employeeName, "@coolcompany.com"),
        salary: salary
    };
}
exports.createEmployee = createEmployee;
var Peter = createEmployee('Peter', 100000);
var Dan = createEmployee('Dan', 80000);
var allNewEmployees = [Peter, Dan];
var sendWelcomeMessage = function (employee) {
    console.log("To: ".concat(employee.email, "\n    Hello ").concat(employee.name, "!\n    Welcome to our awesome company!\n    Your salary will be ").concat(employee.salary, "\n    "));
};
allNewEmployees.forEach(function (employee) { return sendWelcomeMessage(employee); });
