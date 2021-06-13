import {Address} from './address'
import {Bankclass} from './bankclass'
class Customer{
    custName:string;
    constructor(custName:string){
        this.custName=custName;
    }
    getCustomerInfo(){
        console.log(`Iam ${this.custName}`);
    }
}
let cust=new Customer('srinith')
console.log(cust.getCustomerInfo());
let accnum=new Bankclass(23456789);
console.log(accnum.getBankInfo());
let address=new Address('Hyderabad');
console.log(address.getAddressInfo);