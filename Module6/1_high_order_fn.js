// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

const rs=[1000,3000,4000,2000,-898,3800,-4500]

const rsto$=80

const dollar=rs.map(function(a)
{
    return (a/rsto$).toFixed(0)
})

console.log(dollar)
