
class Person{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }

}



class Company{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }
}



let p = new Person('Sanjay','sanjay@gmail.com')

p.getEmail = function(){return this.email}

console.log('p.getEmail()',p.getEmail())


let c= new Company("G7", 'g7@gmail.com' )
c.getEmail=p.getEmail;  //the this context changes from 'p' to 'c'

console.log('c.getEmail()',c.getEmail()); //which email will be printed


