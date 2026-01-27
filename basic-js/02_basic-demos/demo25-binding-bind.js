
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

p.getEmail = p.getEmail.bind(p); //now get email is bound to p irrespective as to how you call it

console.log('p.getEmail()',p.getEmail())  // sanjay@gmail.com

let getEmail = p.getEmail;
console.log('getEmail()',getEmail()); //sanjay @gmail.com



let c= new Company("G7", 'g7@gmail.com' )
c.getEmail=p.getEmail;  //the this context DOESN'T changes from 'p' to 'c'

console.log('c.getEmail()',c.getEmail()); //getEmail() knowns its this and what comes before dot makes no difference


