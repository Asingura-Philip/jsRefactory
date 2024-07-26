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
console.log();

// console.log(people1,people2,people3,people4)

class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
  calcPerimeter() {
    return 2 * (this.length + this.width);
  }
}

let rect1 = new Rectangle(20, 12);
let rect2 = new Rectangle(13, 5);
let rect3 = new Rectangle(10, 20);

// console.log(rect1,rect2,rect3)
rect1.area = function () {
  console.log(this.length * this.width);
};

// rect1.area()
// console.log(rect1.calcPerimeter())

//inheritance

class Cse {
  constructor(name) {
    this.name = name;
  }
  lang() {
    console.log(`${this.name} speaks chinese`);
  }
}

class Js extends Cse {
  constructor(name) {
    super(name);
  }
  lang() {
    console.log(`${this.name} speaks korean`);
  }
}
class Py extends Cse {
    constructor(name) {
      super(name);
    }
    lang() {
      console.log(`${this.name} speaks korean`);
    }
  }

let jsEngineer = new Js("shelby");
// jsEngineer.lang();


class Product{
  constructor(name,price,quantity){
    this.name= name
    this.price=price
    this.quantity=quantity
  }
  price(){
    console.log(`the total price of ${this.name} is ${this.price * this.quantity}`)
  }
}

class Millet extends Product{
  constructor(name,price,quantity,type){
    super(name,price,quantity)
    this.type=type;
  }
  buy(){
    console.log(`you have bought ${this.quantity} bags of ${this.name}`)
    super.price()
  }
}

let millet = new Millet("tooro millet",20000,3,"mixed")
millet.buy()

class Beans extends Product{
  constructor(name,price,type){
    super(name,price)
    this.type=type;
  }
}
class Rice extends Product{
  constructor(name,quantity,origin){
    super(name,null,quantity)//include null for parent constructor arguments not to be used
    this.origin = origin
  }
}
class Posho extends Product{
  constructor(name,grade){
    super(name)
    this.grade = grade
  }
}

let posho = new Posho("namwezi",2)

//console.log(posho)
/* output
Posho {
  name: 'namwezi',
  price: undefined,
  quantity: undefined,
  grade: 2
}
  //the constructor properties from the parent will show but will be undefined
*/

let rice = new Rice("Kaiso",24)
// console.log(rice)