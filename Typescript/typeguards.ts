// type guards saves in run time by checking the type
// type of
//instance of
// custom type guards

function checkId(id:string|number):void{
    if(typeof(id==="string")){
        console.log("its a string")
    }
}
class dog{
    bark(){
        console.log("woof")
    }
}
class cat{
    meow(){
        console.log("meow")
    }
}
function handlepet(pet: dog|cat):void{
    if(pet instanceof dog){
        pet.bark()
    }else{
        pet.meow() //automatic suggests meow
    }
}

//custom type guards

interface Fish{
    swim():void;
}
interface bird{
    fly():void;
}
//returns a bool value
function isFish(pet: Fish|bird): pet is Fish{
    return (pet as Fish).swim() !== undefined;
}
function move(pet:Fish|bird){
    if(isFish(pet)){
        pet.swim();
    }else{
        pet.fly();
    }
}
//basically restricting type to jut check for string otherwise it returns zero
function isString(value:any):value is string{
    return typeof value === "string";
}
function checkType(value: string|number){
    if(isString(value)){
        console.log("It is a string");
    }else{
        console.log("it is a number");
    }
}

const string1 = "Hello my name is maniya";
checkType(string1);