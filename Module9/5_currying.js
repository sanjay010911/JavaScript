let abc=function(a,b){
    return function(){
        console.log(a+b)
    }
}

let a=abc(3,4)
a()