const transactions=[1000,3000,4000,2000,-898,3800,-4500]

const res=transactions.reduce(function(acc,val){
    let updatedsum=acc+val
    return updatedsum
})

console.log(res)