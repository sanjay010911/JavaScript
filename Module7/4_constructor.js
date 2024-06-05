function createBike(name,color,brand){
    this.name=name
    this.color=color
    this.brand=brand
    this.fn=function(){
        console.log(`Name is :${this.name}`)
    }

}

let v=new createBike("X5","blue","BMW")

v.fn()