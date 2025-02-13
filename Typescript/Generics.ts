//generics class creates components that work with types without losing type safety
function genericIdentity<T>(arg:T):T{
    return arg;
}
console.log(genericIdentity<string>("Hello"));
console.log(genericIdentity<number>(11));

interface KeyPair<T, U>{
    key: T;
    pair: U;
}

//generics constraint
function getLength<T extends {length:number}>(item: T):number{
    return item.length; //passes a parameter that has preprty length
}
//generic classes
class Box<T>{
    content: T;
    constructor(value:T){
        this.content = value;
    }
    getContents():T{
        return this.content;
    }
}
class Stack<T>{
    constructor(private items: T[] = [] ){
        this.items = items;
    }
    push(value:T):void{
        this.items.push(value);
    }
    pop():T|undefined{
        return this.items.pop();
    }
    get getstack():T[]{
        return this.items;
    }
}

const stack1 = new Stack<number>([]);
stack1.push(23);
console.log(stack1.pop());
stack1.push(23);
stack1.push(12);
stack1.push(78);
console.log(stack1.getstack);
