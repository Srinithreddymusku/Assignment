"use strict";
exports.__esModule = true;
var address_1 = require("./address");
var bankclass_1 = require("./bankclass");
var Customer = /** @class */ (function () {
    function Customer(custName) {
        this.custName = custName;
    }
    Customer.prototype.getCustomerInfo = function () {
        console.log("Iam " + this.custName);
    };
    return Customer;
}());
var cust = new Customer('srinith');
console.log(cust.getCustomerInfo());
var accnum = new bankclass_1.Bankclass(23456789);
console.log(accnum.getBankInfo());
var address = new address_1.Address('Hyderabad');
console.log(address.getAddressInfo);
