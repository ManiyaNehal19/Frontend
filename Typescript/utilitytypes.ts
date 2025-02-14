//partial 
interface us12{

    name: string;
    age:number;
    email:string
}
const updateUser=(user:Partial<us12>)=>{
    console.log(user);
 }
updateUser({name:"Diva"}); //not necessary to pass them all
//using type
type use123 = Partial<us12>;
const u:use123 = {
    name:"klak"
}

//required
type use1234 = Required<us12>;
const y1:use123 = {
    name:"klak",
    age:12,
    email:"vfv"}

//readonly
//to assign a property to read and cant be reassigned
class userss{
    readonly username: string;
    constructor(public user:string){
        this.username = user;
    }
    updatedet(){
        // this.username = 12; //gives error since the type is readonly
    }
}

//pick can pick specific or subset
type u435 = Pick<us12, 'age'|'email'>
const userpick:u435 = {
    age:23,
    email:"fer",
    //name://error
}
//Omit can omit type
type u45 = Pick<us12, 'age'|'email'>

//record type

type  uuu = Record<number, number>;
const uy:uuu = {
    4:7 //number:number cant assign anyhting else
}

type Role = 'admin' | 'manager'|'guest';
const userrole:Record<Role, string> = {
    admin: "man",
    manager: "mahd",
    guest:"mkj"
}

//exclude to remove sth from union type

type excluderole = Exclude<Role,'manager'>;
const role1:excluderole = 'admin';

//extract
//filter one

//non nullable
type maybeuser = string|null|undefined;
type nonuser = NonNullable<maybeuser>;
//const us24666:nonuser = null; //gives error cant be null or undefined

//return type
 //gets the type of function or var

 function getType(vale: string, anyl: number){
    return {name:"man", age:34};
 }
 type usertype = ReturnType<typeof getType>;
 const lt:usertype =  {name:"man", age:34}; //takes the return type of the function and can be passed

 //paramters takes the type of th paramters in form of tuple
type iskf = Parameters<typeof getType>;
const gettypesparam:iskf= ["Div", 34];


     
