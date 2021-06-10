function Bank1(custid, custname, custaccountnumber) {
    this.custid = custid;
    this.custname = custname;
    this.custaccountnumber = custaccountnumber;
}
var hdfc = new Bank1(101, 'vaishu', 10010);
var sbi = new Bank1(102, 'veda', 101010);
var axis = new Bank1(103, 'pranav', 57390);
console.log(hdfc.custid, hdfc.custname, hdfc.custaccountnumber);
console.log(sbi.custid, sbi.custname, sbi.custaccountnumber);
console.log(axis.custid, axis.custname, axis.custaccountnumber);
