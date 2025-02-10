//union types define multiple data types for same variable
let id: string|number;
function printsId(id:string|number){
    console.log(`id: ${id}`);
    
}
printsId("Maniya");
printsId(9198);