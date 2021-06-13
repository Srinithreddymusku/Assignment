"use strict";
exports.__esModule = true;
exports.Bankclass = void 0;
var Bankclass = /** @class */ (function () {
    function Bankclass(accnum) {
        this.accnum = accnum;
    }
    Bankclass.prototype.getBankInfo = function () {
        console.log("my account number is: " + this.accnum);
    };
    return Bankclass;
}());
exports.Bankclass = Bankclass;
