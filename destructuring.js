//destructuiring and spread operator

//distructuring array
let myArray = [12, 24, 36];
// myArray.forEach(element => {
//     console.log(element)
// });

let [num1, num2, num3] = myArray;
// console.log(num1)

//example 2

let names = ["john", "jack", "julia", "julien"];
let [boy1, boy2, girl1] = names;
// console.log(girl1)
// console.log(names)

let fullStack = [
  ["html", "css", "bootstrap", "js"],
  ["node", "express", "mongoDB"],
];
let [frontEnd, backEnd] = fullStack;

// for (let i of fullStack) {
//   console.log(frontEnd, backEnd);
// }
// console.log(frontEnd);

//spread operator

let code = [2, 3, 4, 5, 6, 7, 8, 54, 32, 45, 33];
let [code1, code2, code3, ...rest] = code;
// console.log(rest);

//destructuring using loops
let countries = [
  ["uganda", "kampala"],
  ["kenya", "nairobi"],
  ["rwanda", "kigali"],
];

// for(const [country,city] of countries){
//     console.log(country,city)
// }

//destructuring objects

let add=(... args)=>{
    console.log(args)
}
add(2,4,3,4,5,7,54,3,2)
