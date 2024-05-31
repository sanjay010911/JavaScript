let a=["abcd","efgh","hijk","lmno"]

let [ar1,ar2,ar3,ar4]=a;
console.log(ar1)


let person={
    name:"james",
    age:22,
    address:{
        pincode:634263,
        place:"pala"
    }

}

let {name,age,address:{pincode:pin,place:pl}}=person
console.log(pin)
console.log(pl)