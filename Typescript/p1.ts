//q1. write a factorial function with proper types
function factorial(n:number):number{
   
    // let sum:number =1 ;
    // for(let i:number=1; i<=n;i++){
    //     sum*=i;
    // }
    // return sum;
    ///resursive
    if(n==0 || n==1){
        return 1;
    }else{
        return n*factorial(n-1);
    }
}
console.log(factorial(5));

//q2 write a function that accepts a user objects and returns a formatted string
interface Users{
    name:string;
    age:number;
    email:string
}
let user1:Users= {
    name:"Maniya",
    age: 19,
    email: "mn09@gmail.com"

}
function formatted(user:Users):string{
    return `My name is ${user.name}, my age is ${user.age} and my email address is ${user.email}`;
}
console.log(formatted(user1));
//q3 write a typescript fucntion that calculates the total prive of an array of products objects, each product has a price and quanity

interface products{
    price:number,
    quantity:number
}
function calculateTotal(product:products[]):number{
   return product.reduce((total, prod) => total = prod.price*prod.quantity,0);
}

let Cart:products[] = [
    {price:12, quantity:2},
    {price:2, quantity:21},
    {price:6, quantity:13}
]
console.log(calculateTotal(Cart));

/*
4. Define a union type for a Vehicle that can either
   be a Car or Bike with different properties.
   Write a function to log details based on the vehicle type.
*/
type Bike = {
    typeVehicle: 'bike',
    model: number,
    year:number

};
type Cars = {
    typeVehicle: 'car',
    model: number,
    year:number

};
type Vehicle = Bike | Cars;
function formatVehicle(vehicle: Vehicle){
    return `Vehicle is a ${vehicle.typeVehicle}, model ${vehicle.model}, year ${vehicle.year}`;
}
const bike1:Vehicle={
    typeVehicle: 'bike',
    model: 203,
    year:2021

}
console.log(formatVehicle(bike1));
