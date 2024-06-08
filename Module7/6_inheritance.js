class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    disp(){
        console.log(this.name)
    }
}

class Teacher extends Person{
    constructor(name,age,classstrength){
        super(name,age)
        this.classstrength=classstrength
    }

    disp2(){
        super.disp()
    }

}

class Student extends Person{
    constructor(name,age,cgpa){
        super(name,age)
        this.cgpa=cgpa
    }
}


let p1=new Person('Adam',23)

let p2=new Teacher('James',23,45)



let p3=new Student('Sanjay',24,8.5)

// console.log(p1)

// console.log(p2)

// console.log(p3)

p2.disp2()