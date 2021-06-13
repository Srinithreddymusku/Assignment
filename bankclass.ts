export class Bankclass{
    accnum:any;
    constructor(accnum:any){
        this.accnum=accnum;
    }
    getBankInfo(){
        console.log(`account number is: ${this.accnum}`);
    }
}