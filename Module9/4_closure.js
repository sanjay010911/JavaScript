function test(){
    let a=4

    function test2(){
        console.log(a)
    }
    return test2
}

let f=test()

console.log(f())
