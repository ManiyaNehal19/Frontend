//has properties and methods
class Persons{
    //by default public
    age:number;
    name:string;
    //initializes the properties of class
    constructor(name:string, age:number){
        this.name = name;
        this.age = age | 0;
    }
 
    greet():string{
        return `Hell my name is ${this.name} and I am ${this.age} years old`;
    }

}
const new_person = new Persons("maniya", 13);
console.log(new_person.greet());
console.log(new_person.name);

//access modifiers: public, private, protected
class Car1{
    name: string;
    private model: number; //private and can e ONLY used within class only
    protected year:number
    constructor(name:string, model:number, year:number){
        this.name = name;
        this.year=year;
        this.model = model;
    }
    getModel():number {
        return this.model;
    }
}
//inheritance
