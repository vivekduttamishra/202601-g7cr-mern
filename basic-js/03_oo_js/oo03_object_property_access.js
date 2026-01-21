
function showPerson(person){
    console.log('person.name',person.name);
    console.log('person.age',person.age);
    console.log('person.bloodGroup',person.bloodGroup);
          
}


//Value can be initialized using JSON notation
let shivanshi= {
    name:"Shivanshi",
    age:15
};

//Additional properties can be added using dot notation
shivanshi.bloodGroup="ab+";

//Properties can also be accessed using dictionary notation
//A JS object is essentially like a dictionary of key-value pairs

shivanshi['email'] = 'shivanshi@gmail.com';  //same as --> shivanshi.email='shivanshi@gmail.com'

//properties can be accessed interchangably in dot and dictionary notation

console.log('shivanshi["bloodGroup"]',shivanshi["bloodGroup"]);
console.log('shivanshi.email',shivanshi.email);


//Special note about dot and dictionary notation
//A dictionary key becomes a variable/property name in dot notation
//if dictionary key doesn't follow naming convention for a variable, it can't be used in dot notation
//it can still be used in dictionary notation

shivanshi['1stSchool']='New India'; // '1stSchool' is a valid dictionary key but not a valid variable name
console.log('shivanshi["1stSchool"]',shivanshi["1stSchool"]);
//can't use in dot notation shivanshi.1stSchool;
//same thing will happen if dictionary key is not a string but something like number or bool or something else
     


