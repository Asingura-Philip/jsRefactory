let firstName = document.getElementById("fname")
let lastName = document.getElementById("lname")
let email =document.getElementById("email")
let phoneNum = document.getElementById("phone")
let passKey = document.getElementById("password")
let formv = document.getElementById("form")

let subBtn = document.getElementById("sub")

formv.addEventListener('submit',function(event){
  event.preventDefault()
  // if(firstName.value){
  //   alert("please enter first name")
  // }else{
  //   alert("form submited")
  //   console.log(firstName.value)
  // }
 
  if(email.value.includes(".com")){
    console.log("valid email")
  }else{
    alert("enter correct email")
  }

  if(passKey.value == "password"){
    alert("cant use 'password' as password")
  }else if(passKey.value.length <=7){
    alert("password has to be more than 7 characters")
  }else{
    console.log("password set")
  }
  formv.reset()
})
