//type narrowing : narrows the data type
 function printsId_type(id:number|string){
    if(typeof(id)=="string"){
        console.log(`ids type is string`);
    }else{//else since we know there are only two types
        console.log(`ids type is number`);

    }
 }
printsId_type("Maniya");
printsId_type(18);