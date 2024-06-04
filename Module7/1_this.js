console.log(this)  //output -> empty object


function fn()
{
    console.log(this) //output -> global object
}

fn()

let v={
    name:"abc",
    age:17,
    fn:function(){
        console.log(this)
    }
}

v.fn() //output -> same object