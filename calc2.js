//trying to do less functions
let values = document.querySelector(".display").innerText;

function numLog(num){
    values = values + num;
    document.querySelector(".display").innerText = values;
} 
function eqz(){
    values = eval(document.querySelector(".display").innerText)
    document.querySelector(".display").innerText = values
}
function clear(){
    location.reload();
}