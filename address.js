"use strict";
exports.__esModule = true;
exports.Address = void 0;
var Address = /** @class */ (function () {
    function Address(city) {
        this.city = city;
    }
    Address.prototype.getAddressInfo = function () {
        console.log("this is " + this.city);
    };
    return Address;
}());
exports.Address = Address;
