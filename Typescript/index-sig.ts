//index signature
interface StringArray{
    [index:number]:string;
}
let ar1:StringArray = ["Maniya", "Nehal","12"]; 
console.log(ar1[1]);

interface fruit{
    [key:string]:string;
}
const fruitarr:fruit={
    "apple":'A red fruit',
    "banana":'a yellow fruit'
}
console.log(fruitarr["banana"]);