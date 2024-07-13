let text = document.querySelector(".display").innerText

function divide(){
    text = text + "/";
    document.querySelector(".display").innerText = text
}
function decimal(){
    text = text + ".";
    document.querySelector(".display").innerText = text
}
function multiply(){
    text = text + "*";
    document.querySelector(".display").innerText = text
}
function plus(){
    text = text + "+";
    document.querySelector(".display").innerText = text
}
function minus(){
    text = text + "-";
    document.querySelector(".display").innerText = text
}
function del(){
    text = text.slice(0,-1)
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
function equals(){

    text = eval(document.querySelector(".display").innerText)
    document.querySelector(".display").innerText = text
    
}
