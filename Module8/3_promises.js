let pro=new Promise(function(resolve,reject){

    const a=5
    const b=5
    setTimeout(()=>{
        if(a===b)
            resolve("Values are equal")
        else
            reject("Values are not equal")
    },2000)

})

pro.then(function(result){
    console.log(result)
})
pro.catch(function(failedresult){
    console.log(failedresult)
})