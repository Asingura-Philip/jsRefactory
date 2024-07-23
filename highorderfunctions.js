//declaration function
function greet(){
    console.log("hello") 
}
//expression function
let greet1 = function(){
    console.log("hello")
}
//immediately evoked function
// (function(){
//     console.log("hello")
// })()

//arrow function
let greet2 = () => {
    console.log("hello")
}
//anonymous function
// function(){
//     console.log("hello")
// }
//callback function

let callback = function(a){
    return a**2;
}

function cubed(callback,a){
    return callback(a)*a
}

console.log(callback(5))
console.log(cubed(callback,3))