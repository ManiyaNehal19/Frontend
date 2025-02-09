enum Color{
    //App_Name = 'my_app)name',
    Red = 'red', // default 0
    Green = 'green', //1
    Blue = 'blue'//2
}
console.log(Color.Blue); //value 2

let color:Color = Color.Red;
console.log(color); //value 2


////use case/////
/*const small = 1;
const medium = 2;
const large = 3;

let size = medium;*/

/*enum Size{
    small = 1,
    medium,
    large
};

let size:Size = Size.medium;
console.log(size);
*/ 

//using const helps optimize js code
const enum Size{
    small = 1,
    medium,
    large
};

let size:Size = Size.medium;
console.log(size);

