class Address{
    city:string;
    constructor(city:string){
        this.city = city;

    }
    getAddressinfo(){
        console.log(`this is the city :${this.city}`)
    }
    }
class Bank{
    accountnumber:number;
    constructor(accountnumber:number){
        this.accountnumber=accountnumber;

    }
    getBankinfo(){
        console.log(`this is the account number:${this.accountnumber}`)

    }
}


class Customer extends Bank  {
    name:string;
    constructor(name:string,accountnumber:number){
        super(accountnumber);
        this.name = name;

    }
    getCustomerinfo(){
        console.log(`this is the name of the customer:${this.name}`)
       
    }
    getBankinfo(){
        console.log(`this is the account number:${this.accountnumber}`)

    }
}
    let customer=new Customer("Srinith",087654321234);


console.log(customer.name,customer.accountnumber)
console.log(customer.getCustomerinfo())
console.log(customer.getBankinfo())