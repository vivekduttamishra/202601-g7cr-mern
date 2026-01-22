
class Person{
    
    constructor(name, biography){
        this.name=name;
        this.biography=biography;
    }

    getName(){
        return this.name;
    }

    toString(){
        return `Person [ ${this.name}]`
    }
};

let sanjay= new Person('Sanjay', 'Tech Writer')

console.log(`Person is ${sanjay}`);

Person.prototype.getBiography= function(){return this.biography;};

console.log('sanjay.getBiography()',sanjay.getBiography());
