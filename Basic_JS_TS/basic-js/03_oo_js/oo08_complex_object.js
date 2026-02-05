

function universalToString(){

    let info='[ ';
    let first=true;
    for(let property in this){
        if(typeof this[property]==='function')
            continue;
        if(!first)
            info+=" , ";
        info+=`${property} : ${this[property]}`
        first=false;
    }

    return info+" ]";
}


let p={
    name:'Sanjay',
    age: 50
}

p.toString=universalToString;
p.eat = function(food){
    console.log(`${this.name} is eating ${food}`)
};

p.move=function(from,to){
    console.log(`${this.name} is going from ${from} to ${to}`);
}


p.move('home','office')
p.eat('lunch')
p.move('office', 'home')

console.log(`person is ${p}`)

//How will I create multiple person objects?