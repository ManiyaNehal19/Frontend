//helps in creating a array with different data type with fixed length
let arr:[number, string] = [34, "Sam"];
//usecase: array with strict position, cordinates
let cordinates:[number, number, number] = [23, 65,0];// (x,y,z)

//http response (example)
let response:[number, string] = [200, "Success"];
//tuples are generally used as keyvalue pair
//drawback
response.push(0);
console.log(response); //[ 200, 'Success', 0 ]
