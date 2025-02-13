//Q1
class BankAccount{
    accountNumber:string;
    private balance:number;
    constructor(accountNumber:string,balance:number){
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    deposit(amount:number):void{
        if(amount>0){
            this.balance+=amount;
        }else{
            console.log("Invalid amount");
        }
        
    }
    withdraw(amount:number):void{
        if(amount<=this.balance){
            this.balance-=amount;
        }else{
            console.log("Invalid amount");
        }
        
    }
    get balanceAmount():number{
        return this.balance;
    }

}
const maniyaAcc = new BankAccount("12643" ,1265);
maniyaAcc.deposit(124566);
console.log(maniyaAcc.balanceAmount);
maniyaAcc.withdraw(124566);
console.log(maniyaAcc.balanceAmount);

//q2
class Employee{
    constructor(public name:string, protected salary:number){
        this.name = name;
        this.salary = salary;
    }
    getDetails():void{
        console.log(`${this.name}, ${this.salary}`);
    }
}
class Manager extends Employee{
    constructor(public department:string, name:string, salary:number){
        super(name, salary);
        this.department = department;
    }
    getDetails():void{
        console.log(`${this.name}, ${this.salary}, ${this.department}`);
    }
}
const emp1 = new Employee("Mahd", 210000);
const manager = new Manager("HR","Maniya", 123456 );
emp1.getDetails();
manager.getDetails();