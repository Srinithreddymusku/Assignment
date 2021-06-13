import {Address} from './address'
import {Bankclass} from './bankclass'
class Employer{
    empName:string;
    empId:number;
    constructor(empName:string,empId:number){
        this.empName=empName;
        this.empId=empId;
    }
    getEmployerInfo(){
        console.log(`Iam ${this.empName} with id ${this.empId}`);
        let acnb = new Bankclass(12345);
        console.log(acnb.getBankInfo());

        let addrs = new Address('Hyderabad');
        console.log(addrs.getAddressInfo());
    }
}
class Employee extends Employer{
    epSalary:number;
    constructor(empName,empId,epSalary){
        super(empName,empId);
        this.epSalary=epSalary;
    }
    getEmployeeInfo(){
        console.log(`this is employee's info`);
    }
    getInfo(){
        console.log(`Name: ${this.empName} with ID : ${this.empId} having Salary ${this.epSalary}`)
    }
    getParentInfo(){
        super.getEmployerInfo();
    }
}
let employer = new Employee('srinith',101,20000000);
console.log(employer.getInfo());
console.log(employer.getParentInfo());