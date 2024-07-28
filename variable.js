//comments can make code readable
//welcome to CSE javascript class

/*
Comments can make code readble,
                     easy to reuse,
                                and informative
*/

// let message = "Hello world";  //string
// let isMale = true;            //boolean
// let unStated = undefined;     //undefined
// let nothing = null;           //null

// console.log(message)
// console.log(isMale)
// console.log(unStated)
// console.log(nothing)
// let age = 19
// if (age>18){
//     console.log("you are an adult")
// }
// console.log( "A" - "B" + 2);
// console.log(1 + +"2" + "2");
// console.log("7"+"8");

// function foo() {
//     return bar();
//     function bar() {
//       return "Hello, I'm bar!";
//     }
//   }

//   console.log(foo());
// var x = 10;

// function foo() {
//     console.log(x);
//     var x = 20;

// }

// foo();
// let array1 = [1,2,3,4,5,6]
// console.log(array1.slice(0,6))

// var person = {
//     name: "John",
//     age: 30,
//     greet: function() {
//       return "Hello, my name is " + this.name + " and I am " + this.age + " years old.";
//     }
//   };

//   var greetFunction = person.greet;
//   console.log(greetFunction());

//create a function that counts the number of syllables a word has
//each syllable is separated eith a dash

// function numberSyllables(word) {
//   let myArray = word.split("");
//   let sep = 0;
//   for (let i = 0; i < myArray.lenght; i++) {
//     console.log(i);
//     if (myArray[i] === "-") {
//       sep = sep + 1;
//     }
//   }
//   console.log(sep);
// }

// numberSyllables("ba-na-na");

// let word = "a-bc-dc-ju";
function newSyll(word) {
  let myArray = word.split("");
  console.log(myArray);
  let sep = 1;
  for (let i = 0; i < myArray.length; i++) {
    if (myArray[i] === "-") {
      sep = sep + 1;
    }
  }
  console.log(` ${word} contains ${sep} syllables`);
}
newSyll("ma-ca-ro-ni")
// // let name = "saitama";
// // console.log(name.split(''));

// let myArray = ["b", "a", "-", "n", "a", "-", "n", "a"];
// let sep = 0;
// for (let i = 0; i < myArray.lenght; i++) {
//   if (myArray[i] === "a") {
//     sep = sep + 1;
//   }
// }
// console.log(sep);
