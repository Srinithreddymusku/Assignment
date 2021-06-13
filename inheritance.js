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
var Address = /** @class */ (function () {
    function Address(city) {
        this.city = city;
    }
    Address.prototype.getAddressinfo = function () {
        console.log("this is the city :" + this.city);
    };
    return Address;
}());
var Bank = /** @class */ (function () {
    function Bank(accountnumber) {
        this.accountnumber = accountnumber;
    }
    Bank.prototype.getBankinfo = function () {
        console.log("this is the account number:" + this.accountnumber);
    };
    return Bank;
}());
var Customer = /** @class */ (function (_super) {
    __extends(Customer, _super);
    function Customer(name, accountnumber) {
        var _this = _super.call(this, accountnumber) || this;
        _this.name = name;
        return _this;
    }
    Customer.prototype.getCustomerinfo = function () {
        console.log("this is the name of the customer:" + this.name);
    };
    Customer.prototype.getBankinfo = function () {
        console.log("this is the account number:" + this.accountnumber);
    };
    return Customer;
}(Bank));
var customer = new Customer("ramakanth", 4949494949);
console.log(customer.name, customer.accountnumber);
console.log(customer.getCustomerinfo());
console.log(customer.getBankinfo());
