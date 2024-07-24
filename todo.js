let lists = document.getElementById("lists")
let task = document.getElementById("task")
let btn = document.getElementById("submit")
let del = document.getElementById("del")
let out = document.getElementById("outer")

out.style.backgroundColor = "lightblue"
out.style.width = "400px"

btn.addEventListener("click",function(event){
    event.preventDefault()
    let item = document.createElement("li")
    lists.appendChild(item)
    item.innerText = task.value
    task.value = ""
    
    
})

del.addEventListener("click",function(){
    let text = document.querySelector("li")
    lists.removeChild(text)
})
