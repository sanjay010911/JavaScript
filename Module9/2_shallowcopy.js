let firstperson={
    name:"rohan",
    age:34,
    address:{
        city:"lucknow",
        state:"UP"
    }
}

let secondperson=firstperson     

secondperson.name="steve"     //same memory location is modiefied
console.log(firstperson)
console.log(secondperson)


secondperson.address.city="bombay"

console.log(firstperson.address.city)

// let secondperson={...firstperson}    =>shallow copy

// secondperson.name="steve"
// console.log(firstperson)
// console.log(secondperson)