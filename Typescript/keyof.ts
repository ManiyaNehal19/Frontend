interface person{
    name:string;
    age:number;
    email:string;
}
type Personskey = keyof person; //person keys could be one of the keys
let keys: Personskey = 'name'; //keys can only of the personkeys name, age, email
