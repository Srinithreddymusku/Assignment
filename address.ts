export class Address{
    city:string;
    constructor(city:string){
    this.city=city;
    }
    getAddressInfo(){
        console.log(`this is ${this.city}`);
    }
}