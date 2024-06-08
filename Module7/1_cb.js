const fs=require('fs')

// console.log("first line")
// let data=fs.readFileSync('1.txt')    ->synchronously

// console.log('this is file 1 :'+data)

// console.log("last line")

console.log("first line")

let data2=fs.readFile('1.txt',cb)

function cb(err,data){
    if(err){
        console.log(err)
    }
    console.log('this is file 2 :'+data)
}

console.log("last line")





