
function showObject(object, label=""){
    console.log(`------ ${label}-----`)

    for(let property in object){
        console.log(property,'\t', object[property]);
    }
    
    console.log()
}

function eat( food){
    console.log( `${this.name} is eating ${food}`)
}

//Value can be initialized using JSON notation
let shivanshi= {
    name:"Shivanshi",
    age:15
    
};

shivanshi.eat=eat;  //assigned the eat function to shivanshi object


let sanjay={name:'Sanjay', age:50, eat:eat}


shivanshi.eat( 'Maggi'); //this will refer to shivanshi object

sanjay.eat( 'lunch'); //this will refer to sanjay object


//what happens if we call eat without object

eat('Ice Cream') ; //who is eating it? 

var name = 'Mr Window'

eat('Deserts');