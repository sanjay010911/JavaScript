let firstperson={
    name:"rohan",
    age:34,
    address:{
        city:"lucknow",
        state:"UP"
    }
}
let secondperson=JSON.parse(JSON.stringify(firstperson))
secondperson.address.city="delhi"

console.log(firstperson)
console.log(secondperson)