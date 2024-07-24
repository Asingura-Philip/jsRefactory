let lists = document.getElementById("lists")
let task = document.getElementById("task")
let btn = document.getElementById("submit")

btn.addEventListener("click",function(){
    let item = document.createElement("li")
    lists.appendChild(item)
    item.innerText = task.value
    
})
