const transactions=[1000,3000,4000,2000,-898,3800,-4500]


const v=transactions.find(function (n){
    return n<0
})
console.log(v)


const c=transactions.findIndex(function (n){
    return n<0
})
console.log(c)

const a=transactions.some(function (n){
    return n>0
})
console.log(a)

const b=transactions.every(function (n){
    return n>0
})
console.log(b)