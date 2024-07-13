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

var person = {
    name: "John",
    age: 30,
    greet: function() {
      return "Hello, my name is " + this.name + " and I am " + this.age + " years old.";
    }
  };
  
  var greetFunction = person.greet;
  console.log(greetFunction());