//literal types
type orderStatus = 'delivered' | 'pending' | 'canceled';
let order: orderStatus  = "pending"; //automatic 

//string literals
let answer: "yes"|"no";
answer = 'no';

let count = 0|1|2;
count  = 0;

//boolean 
type Action = 'add' | 'update' | 'pending';
function takeAction(action:Action){
    switch(action){
        case "add":
            console.log("Order Added");
    
        case "pending":
            console.log("Order Pended");
        case "update":
                console.log("Order Updated");
    }
}

//hello this is a test to see if my commits are synced correctly
