//represents type that doesnt occur, no return or throws an error
function infinity():never{
    while(true){
    
        console.log(1);
    }
}

function throwsError(message:string):never{
    throw new Error(message);
}
// infinity();
// throwsError("Trouble Loading");
//ctrl c to stop infinite loop
