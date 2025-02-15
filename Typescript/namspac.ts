//rarely use and prefered is modules 
//need to write all the code at one plave
namespace Geomtry{
    export const pi = 3.14;
    export class calc{
        area(length:number):number{
            return length*length;
        }
    }
    export function getCirclearea(val:number):number{
        return 2*3.14*val;
    }
}
console.log(Geomtry.pi);
//can call geometry. whatever in other files w/o import 
//in-memory

