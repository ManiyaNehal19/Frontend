//way to add meta data to classses, methods, properties or paramters
/*
types:
class decrators
methods decorator
accessor & property decorator
parameter decorator
*/
//during run time you can change 

//class
function Logger(constructor:Function){
    console.log(`Logging the creation of class: ${constructor.name}`);
}
@Logger
class P1{
    constructor(public name:string){}
}
const p = new P1("Maniya");
console.log(p); //first function is called logger then p

//method 
function LogMethod(target:Object, propertkeys:string, properde: PropertyDescriptor){
    const originalMethod= properde.value();
    properde.value = function(...args:any[]){
        console.log(`method called ${propertkeys}`);
        return originalMethod.apply(this, args);
    }
}
class claclOp{
    add(num:number, b:number):number{
        return num+b;
    }
}
const cla = new claclOp();
cla.add(5,7);

