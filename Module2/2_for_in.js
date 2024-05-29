var colours={
    primary:"blue",
    seconfary:"yello",
    teritiary:"orange"
}

for(var a in colours)
    {
        console.log(colours[a])//here 'a' indicates the keys in objects
    }

    var clr=["purple","grey","green"]

    for(var b in clr)
        {
            console.log(clr[b])
            // console.log(clr.b)  ->this is not valid in for in loop
        }

        for(var c of clr)
            console.log(c)

        for(var [i,c] of clr.entries())
        {
            console.log(i+" -> "+c)
        }