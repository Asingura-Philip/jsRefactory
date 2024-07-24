let firstName = document.getElementById("fname").value;
let lastName = document.getElementById("lname").value;
let email = document.getElementById("email").value;
let phoneNumber = document.getElementById("phone").value;
let password = document.getElementById("password").value;

let submitBtn = document.getElementById("sub");

submitBtn.addEventListener("click", function (event) {
    console.log(firstName.lenght)
  event.preventDefault();
  if (firstName.lenght < 3) {
    console.log("please enter longer name");
  }else{
    console.log("valid")
  }
  //alert("form submitted sucessfully");
});
