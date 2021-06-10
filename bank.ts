
class Bank{
    custName:string;
    custId:number;
    custAcno:number;
    constructor(name:string,id:number,accnumber:number)
    {
        this.custName=name;
        this.custId=id;
        this.custAcno=accnumber;
    }
    getSavingDeposit()
    {
        return `name is:${this.custName} with id:${this.custId} and account number is: ${this.custAcno} have amount 1000`
    }
    getRecurringDeposit()
    {
        return `name is:${this.custName} with id:${this.custId} and account number is: ${this.custAcno} have deposits 2000`
    }

getFixedDeposit()
{
    return `name is:${this.custName} with id:${this.custId} and account number is: ${this.custAcno} have FD 10000`
}
}
let bank1=new Bank('sri',12,1452)
let bank2=new Bank('nith',45,4712)
let bank3=new Bank('sai',71,9822)
console.log(bank1. getSavingDeposit())
console.log(bank2.getRecurringDeposit())
console.log(bank1.getFixedDeposit ())
console.log(bank1.custName,bank1.custId,bank1.custAcno)
console.log(bank2.custName,bank2.custId,bank2.custAcno)
console.log(bank3.custName,bank3.custId,bank3.custAcno)


