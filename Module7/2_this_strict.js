'use strict'

console.log(this)  //output -> empty object

function fn()
{
    console.log(this) //output -> global object
}

fn()
