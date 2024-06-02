// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

function printfirstname(first,cb){
    console.log(first)
    cb("rogers")
}

function printlastname(last){
    console.log(last)
}

printfirstname("steve",printlastname)

