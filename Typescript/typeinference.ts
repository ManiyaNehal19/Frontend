//type inference
let username = "Maniya"; //ts would nore infer the type to of username to be string even though its not assingned string 
//username = 18; gives error

//type assertion
let someVal:any = "Hello Maniya";
let str_length:number = someVal.str_length; //suggestios are not given since type is any
let strlength:number = (someVal as string).length; //now it gives suggestiong

