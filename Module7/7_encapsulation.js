function Person(_name,age,place){
        this.name=_name;
        this.age=age;
        this.place=place;


    this.disp=function(){
        return this.name;
    }
}

let p1=new Person("ajay",56,"goa");

console.log(p1.disp())