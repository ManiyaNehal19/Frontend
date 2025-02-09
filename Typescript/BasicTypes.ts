//built-in types: number string, bool, nul, undeifned,object
//ts types: any, unknown, never, enum, tuple

//Basic Types

//integer
let num:number = 12;
let num2:number = 23_4564_222; //number could be broken using '_'
let bignum:bigint = 7397489737267658459437589435n; //bigint are for large integer  
console.log(num + " " + num2 + " " + bignum );
//strings
let sentence:string = "Hello! everyone welcome back";
// boolean
const isTrue:boolean = false; // when assigned const w/o mentioning the datatype the var takes on the value it is assigned

//Array
let numArr: number[] = [1,2,3,4,5]; //when assigning a type to arr you can't pass another type
let strArr: string[] = ["array", "should", "have","strings","only"]; 

//undefined
let val:undefined = undefined; //udefined only takes on undefined 

//null
let val2:null= null;//null only takes on null 

//object
let obj1:object= {
    name : "Maniya",
    age: 16
}
//can specify the keys datatype
let obj2:{name: string, age: number}= {
    name : "Maniya",
    age: 16
}

//creating a copy using ... =>{spread operator}(this only copies the objects key and values pair)
let objCopy = {...obj1, phone:987623};
//w/o ... entire obj would be copied
let objCopy2 = {obj1};
console.log(objCopy);
console.log(objCopy2);
/* { name: 'Maniya', age: 16 }
{ obj1: { name: 'Maniya', age: 16 } }*/

let objCopy3 = {...obj2, phone: 234111};//if we set objCopy3 type to obj2 then it wont take extra param

//overriding the paramters
let objectC4 = {...obj2, age: 23};

console.log(objCopy3);
console.log(objectC4);


//////Typescript datatypes///////////////////

//any type
let anyval:any= 12;
anyval = "Sring";

function testType(value:any){
    console.log(typeof(value));
}
testType(anyval); //prints string
//consoling testType(anyVal) print undefined
console.log(testType(anyval));




