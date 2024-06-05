class Bike
{
    constructor(name,brand,color){
        this.name=name
        this.brand=brand
        this.color=color
    }

    welcome(){
        console.log(`Bike name :${this.name}`)
    }
}


let v=new Bike("X5","BMW","blue")
v.welcome()
