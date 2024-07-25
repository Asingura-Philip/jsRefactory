//components
let person = {
  name: "philip",
  age: 23,
};

//classes
//using constructors
function Person(name, age) {
  this.name = name;
  this.age = age;
}

let person3 = new Person("tom", 24);
let person4 = new Person("jim", 25);
let person5 = new Person("sam", 15);

// console.log(person3.name)
// console.log(person4.name)
// console.log(person5.name)

//ES6 way of writing constructors

class People {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
let people1 = new People("toby", 29);
let people2 = new People("tony", 22);
let people3 = new People("rony", 45);
let people4 = new People("jony", 34);
console.log()

// console.log(people1,people2,people3,people4)

class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
  calcPerimeter(){
   return 2*(this.length + this.width)
  }
}

let rect1 = new Rectangle(20, 12);
let rect2 = new Rectangle(13, 5);
let rect3 = new Rectangle(10, 20);

// console.log(rect1,rect2,rect3)
rect1.area= function(){
    console.log(this.length*this.width)
}


rect1.area()
console.log(rect1.calcPerimeter())

