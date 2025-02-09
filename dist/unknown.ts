
//if you are not sure about the datatype of the var you an set it to unknown
let notsure:unknown = 'a';
if(typeof(notsure)=="number"){
notsure.toString();  
}
else if(typeof(notsure)=="string"){
    notsure.endsWith("s");
}

