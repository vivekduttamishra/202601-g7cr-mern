
function showObject(object, label=""){
    console.log(`------ ${label}-----`)

    for(let property in object){
        console.log(property,'\t', object[property]);
    }
    
    console.log()
}

function eat(person, food){
    console.log(`${person.name} is eating ${food}`)
}

//Value can be initialized using JSON notation
let shivanshi= {
    name:"Shivanshi",
    age:15
    
};

shivanshi.eat=eat;  //assigned the eat function to shivanshi object


let sanjay={name:'Sanjay', age:50, eat:eat}


shivanshi.eat(shivanshi, 'Maggi');

shivanshi.eat(sanjay, 'lunch');

