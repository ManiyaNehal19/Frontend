//sync programming
/*function task1():void{
    console.log("Task 1");
}
function task2():void{
    console.log("Task 2");
}
task1();
task2();
*/
//async programming
function taska1(){
    setTimeout(()=>{
    console.log("Task 1");
        
    },2000);

}
function task22():void{
    console.log("Task 22");
}
// taska1();
// task22();
//task2  is called first it doesnot wait for the first one unlike sync programming


//promises completion or failure of a task
const fetchData = (value:boolean):Promise<string> =>{
    return new Promise((resolve, reject)=>{ // mandatory to write new promise
        if(value){
            
                resolve('Data fetched successfully');
          
        
        }else{
            reject('Error found');
        
        } 
        
    });
};
// then shows success while catch shows error
fetchData(true)
.then((data)=>{
    console.log(data, "success");
    //nested data
    fetchData(true).then((data1)=>{
        console.log(data1)
    }).catch((error1)=>{
        console.log(error1);
    })
    // return 'get more data'
})
.then((moredata)=>{
    console.log(moredata, "more data");
})
.catch((error)=>{
    console.log(error, "Error");

})

//async await (chaining promise seems cluterred)

// asyn keyword converts the function return type to the promise
async function FetchAdata(): Promise<string>{
    return "Data Is Fetched";
}

FetchAdata().then((data)=>{
    console.log(data)
}).catch((error)=>{
    console.log(error)
})

async function getData():Promise<void>{
    //this does the work of then in just two lines and if you want nested .then it is possible(mkae 2 const var) with await

    //await makes it sync error catching solved until data is fetched the next line is not executed
    // const data = await FetchAdata();
    // const data1= await FetchAdata();

    //try catch block
    try{
        const data = await FetchAdata();
        const data1= await FetchAdata();
    }
    catch(error){
        //all errors are handle in one line
        console.log(error);
    }

}

//Working with Api using fetch (typescipt helps wiht tye saftey
interface Post{
}
async function fetchPosts():Promise<Post> {
    
    try{
        const respone = await fetch('https://jsonplaceholder.typicode.com/posts');
        //json data)
        const post:Post[] = await respone.json();
    //    console.log(post);
        return post;
    }
    
    
    catch(error:any){
        throw(error)
    }
}
fetchPosts()
.then(data=>{
    console.log(data); //data would be logged here
})
.catch((error:any)=>{
    console.log(error);
    })
//concurrent promise with Promise.all
async function task1(){
    return "Task 1";
}
async function task2(){
    return "Task 2";
}
async function ftchdata():Promise<[string, string]>{
    const [data1, data2] = await Promise.all([task1(), task2()]);
    return [data1, data2];    

}
ftchdata()
.then(data=>{
    console.log(data);
})
.catch(error=>{
    console.log(error);
})