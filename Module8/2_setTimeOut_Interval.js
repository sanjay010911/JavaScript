// setTimeout(cb,1000)

function cb(){
    console.log("Hello")
    clearInterval(5000)
}

let timer=setInterval(cb,1000)

setTimeout(function (){
    clearInterval(timer)
},5000)
   


