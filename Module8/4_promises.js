function placeholder(drink){
    return new Promise(function(resolve,reject){
        if(drink==="coffee")
            resolve("Order is Placed")
        else    
            reject("Order not Placed")
    })
}

placeholder('coffee').then(function(resolve){
    console.log("Order is processed")
    let orderplaced=new processorder(orderplaced)
})