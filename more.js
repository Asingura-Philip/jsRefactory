// closures

function outer(){

    let message = "wazzzaaa"

    function inner(){
        console.log(message)
    }
    inner()
}

// outer()

// #2
function createCounter(){


    let count = 0;
    function increment(){
        
        count++;
        console.log(`count increased to ${count}`)
    }
    return {increment}
}

const counter = createCounter()
counter.increment()
counter.increment()
counter.increment()