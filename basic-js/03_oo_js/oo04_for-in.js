
function showObject(object, label=""){
    console.log(`------ ${label}-----`)

    for(let property in object){
        console.log(property,'\t', object[property]);
    }
    
    console.log()
}


//Value can be initialized using JSON notation
let shivanshi= {
    name:"Shivanshi",
    age:15
};

shivanshi.bloodGroup="ab+";
shivanshi['email'] = 'shivanshi@gmail.com';  //same as --> shivanshi.email='shivanshi@gmail.com'

showObject(shivanshi,'shivanshi')

var origin={x:0,y:0};
showObject(origin,'Point')

var rectangle = { start: {x:3, y:4}, width:20, height:30};
showObject(rectangle, 'Rectangle');

