"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var address_1 = require("./address");
var bankclass_1 = require("./bankclass");
var Employer = /** @class */ (function () {
    function Employer(empName, empId) {
        this.empName = empName;
        this.empId = empId;
    }
    Employer.prototype.getEmployerInfo = function () {
        console.log("Iam " + this.empName + " with id " + this.empId);
        var acnb = new bankclass_1.Bankclass(12345);
        console.log(acnb.getBankInfo());
        var addrs = new address_1.Address('Hyderabad');
        console.log(addrs.getAddressInfo());
    };
    return Employer;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(empName, empId, epSalary) {
        var _this = _super.call(this, empName, empId) || this;
        _this.epSalary = epSalary;
        return _this;
    }
    Employee.prototype.getEmployeeInfo = function () {
        console.log("this is employee's info");
    };
    Employee.prototype.getInfo = function () {
        console.log("Name: " + this.empName + " with ID : " + this.empId + " having Salary " + this.epSalary);
    };
    Employee.prototype.getParentInfo = function () {
        _super.prototype.getEmployerInfo.call(this);
    };
    return Employee;
}(Employer));
var employer = new Employee('srinith', 101, 20000000);
console.log(employer.getInfo());
console.log(employer.getParentInfo());
