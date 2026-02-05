
function showPerson(person){
    console.log('person.name',person.name);
    console.log('person.age',person.age);    
}



let sanjay= new Object();

//and attach relevant properties
sanjay.name="Sanjay";
sanjay.age=50;

showPerson(sanjay);

//object creation shortcut
let prabhat = {};   //same as new Object()
prabhat.name="Prabhat";
prabhat.age=40;
showPerson(prabhat);


//object initilization 
//we can set values right when creating it
//Java Script Object Notation (JSON)
//Note:  property and value are separated using ":" not "="
let shivanshi= {
    name:"Shivanshi",
    age:15
};

showPerson(shivanshi)


//IMPORTANT NOTE
//showPerson can take any object not just a person
//There is nothing yet that tells person is something special
var origin  = {x:0, y:0};
showPerson(origin) ; //not a person. doesn't have name or age