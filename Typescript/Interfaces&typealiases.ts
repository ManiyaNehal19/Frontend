interface Person{
    name: string;
    age: number;
    //greet(): void;
    greet:()=>void; 
}//doesnot produce any code but rather use for type safety

function greet(){
        console.log("Hello")
    };
let p1: Person = {
    name: "Mahd",
    age: 12,
    // greet(){
    //     console.log("Hello")
    // }
    greet
};
//if i want to make greet outside and call inside


/////interface+function
interface Mathoper{
    (a:number,b:number):number
}
const addnum:Mathoper = (x,y)=> x+y;
const subnum:Mathoper = (x,y)=> x-y;


///type alias: gives meaningful names to datatypes
type UserId = string; //string now have another value
let user:UserId = "Maniya";

type person2 = {
    name:string;
    profession:string;
}
let p2:person2 = {
    name: "MANIYA",
    profession: "STUDENT"
}
type ID = string|number;
let UserId:ID= 'saeed';
let orderID:ID = 1098;
 

//interface vs type alias

interface user{
    name: string;
    phone: number;
}
//INHEIRTS FROM USER
// interface Student extends user{
//     address: string;
// }

// let s1:Student = {
//     name: "MANIYA",
//     phone: 1234,
//     address: "232"
// };
interface user{
    address: string;
}

let s1:user = {
    name: "MANIYA",
    phone: 1234,
    address: "232"
};

//we can redefine user and it works as extending it


///////types
type vehicle = {
    make: string;
    model: string;
}

// & -> interface types
type Car = vehicle &{
    iselectric: boolean;
}


//recursion intype alias
type Tree = {
    value: string,
    children: Tree[];
}


/*                    interface     |  type
define union         0                  1
intersection type    0                  1
extending            1                  1
merging declaration  1                  0
for primitative types0(obj only)        1
flexible             0                  1*/