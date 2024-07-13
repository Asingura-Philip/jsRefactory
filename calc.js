//let num = Number(document.getElementById("number").innerText)
//console.log(num)
let num = Number(document.getElementById("number").innerText)
let text = document.querySelector(".display").innerText
console.log(text)
function add(){

}

function plus(){
    text = text + "+";
    document.querySelector(".display").innerText = text
}
function minus(){
    text = "-" + text;
    document.querySelector(".display").innerText = text
}

function cls(){
    location.reload();
}

function one(){
    text =text + 1;
    document.querySelector(".display").innerText = text
}
function two(){
    text = text + 2;
    document.querySelector(".display").innerText = text
}
function three(){
    text = text + 3;
    document.querySelector(".display").innerText = text
}
function four(){
    text = text + 4;
    document.querySelector(".display").innerText = text
}
function five(){
    text = text + 5;
    document.querySelector(".display").innerText = text
}
function six(){
    text = text + 6;
    document.querySelector(".display").innerText = text
}
function seven(){
    text = text + 7;
    document.querySelector(".display").innerText = text
}
function eight(){
    text = text + 8;
    document.querySelector(".display").innerText = text
}
function nine(){
    text = text + 9;
    document.querySelector(".display").innerText = text
}
function zero(){
    text = text + 0;
    document.querySelector(".display").innerText = text
}