//Regular function
function mathOp(a:number, b:number):number{
    return a+b;
}
console.log(mathOp(12, 6));

//function expression
const divide = function(a:number, b:number):number {
    return a/b;
}
console.log(divide(34,2));

//arrow functions (most used)
const multiply = (a:number, b:number):number => {
    return a*b;
}
console.log(multiply(3,4));


//optional and default parameters

//optional paramters
function greet(username: string, greeting?: string):string{
   return `${greeting?greeting:""} ${username}`;

}
//default parameters if not present default is used
function greet2(username: string, greeting: string = "Hi!"):string{
    return `${greeting} ${username}`;
 
 }
console.log(greet("nikhil"));
console.log(greet2("nikhil"));

//function overloading 
//same function different paramters
function getLength(value:string):number;
function getLength(value:any[]):number;
function getLength(value:any):number{
    return value.length;
}
console.log(getLength([1,2,3,4]));

//Rest Parameter
