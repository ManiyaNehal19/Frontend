"use strict";
let num = 12;
let num2 = 234564222;
let bignum = 7397489737267658459437589435n;
console.log(num + " " + num2 + " " + bignum);
let sentence = "Hello! everyone welcome back";
const isTrue = false;
let numArr = [1, 2, 3, 4, 5];
let strArr = ["array", "should", "have", "strings", "only"];
let val = undefined;
let val2 = null;
let obj1 = {
    name: "Maniya",
    age: 16
};
let obj2 = {
    name: "Maniya",
    age: 16
};
let objCopy = { ...obj1, phone: 987623 };
let objCopy2 = { obj1 };
console.log(objCopy);
console.log(objCopy2);
let objCopy3 = { ...obj2, phone: 234111 };
let objectC4 = { ...obj2, age: 23 };
console.log(objCopy3);
console.log(objectC4);
let anyval = 12;
anyval = "Sring";
function testType(value) {
    console.log(typeof (value));
}
testType(anyval);
console.log(testType(anyval));
//# sourceMappingURL=BasicTypes.js.map