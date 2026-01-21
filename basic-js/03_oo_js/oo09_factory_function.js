

function universalToString() {

    let info = '[ ';
    let first = true;
    for (let property in this) {
        if (typeof this[property] === 'function')
            continue;
        if (!first)
            info += " , ";
        info += `${property} : ${this[property]}`
        first = false;
    }

    return info + " ]";
}


function createPerson(name, age) {

    //create object. we can use either 'new' or {}
    let p = new Object();

    //set properties : we may use json initialization, dot or dictionary
    p.name=name;
    p.age=age;

    //attach behavior 
    //don't use arrow function as you will miss out 'this'
    p.toString = universalToString;
    p.eat = function (food) {
        console.log(`${this.name} is eating ${food}`)
    };

    p.move = function (from, to) {
        console.log(`${this.name} is going from ${from} to ${to}`);
    }

    //return the object
    return p;
}


let sanjay = createPerson('Sanjay', 50)
sanjay.move('home','office')
sanjay.eat('lunch')


let shivanshi= createPerson('Shivanshi',15)
shivanshi.eat('breakfast')
shivanshi.move('home','school')