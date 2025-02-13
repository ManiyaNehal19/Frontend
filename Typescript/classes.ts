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
class Animal{
    constructor(public name: string){}
    Eats():void{
        console.log("Animal has eaten");
    }
}
class Dog extends Animal{
    constructor(name:string){
        super(name); //directly calling animal class constructor
    }
    Eats(): void {
        console.log("Dog has eaten");
    }
}
const dog1 = new Dog("Pups");
dog1.Eats();

//Abstract class : classes that cant be initiated
abstract class Shape{
    abstract getArea():number //all extended classes must make it
    printArea():void {
        console.log(`${this.getArea()}`);
    }
}
class square extends Shape{
    constructor(private length:number){
        super()
    }
    getArea():number{
        return this.length*this.length;
    }
}
const sqr1 = new square(56);
sqr1.printArea()
//setter and getters
class circle{
    private rad:number
    constructor(radius: number){
        this.rad = radius;
    }
    //these becomes property
    get radius():number{
        return this.radius;
    }
    //circle.radius = some number.
    set radius(radius: number){
        this.rad = radius;
    }

}