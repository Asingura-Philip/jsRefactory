let firstName = document.getElementById('fname').value
let lastName = document.getElementById('lname').value
let email = document.getElementById('email').value
let phoneNumber = document.getElementById('phone').value
let password = document.getElementById('password').value


let submitBtn = document.getElementById("sub")

submitBtn.addEventListener(submit,function(event){
    // event.preventDefault()
    alert("form submitted sucessfully")
})

