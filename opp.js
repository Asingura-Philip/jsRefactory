//components
let person = {
    name:"philip",
    age:23
}

//classes 
//using constructors
function Person(name,age){
    this.name = name
    this.age = age
}

let person3 = new Person("tom",24) 
let person4 = new Person("jim",25)
let person5 = new Person("sam",15)

console.log(person3.name)
console.log(person4.name)
console.log(person5.name)