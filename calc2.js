//trying to do this with conditional statements
let values = document.querySelector(".display").innerText;


function numLog(num){
    values = values + num;
    //console.log(values)
    document.querySelector(".display").innerText = values;
} 