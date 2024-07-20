let firstName = document.getElementById('fname').value
let lastName = document.getElementById('lname').value
let email = document.getElementById('email').value
let phoneNumber = document.getElementById('phone').value
let password = document.getElementById('password').value


let submitBtn = document.querySelector('.submit')

submitBtn.addEventListener('submit',function(event){
    event.preventDefault()
    console.log("work submitted")
})

