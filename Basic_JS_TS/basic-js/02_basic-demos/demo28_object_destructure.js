
let person={ name:'Sanjay', age:50, email:'sanjay@gmail.com'}

//what if we need to access the email field of the object

//ordinary approach common in most languages
//let email =person.email

//ES2015

let {email} = person; //take person.email and store in variable email


//what if I want to store it in a variable of different name say: person.name=> personName
//old way
//let personName= person.name;

let {name:personName} = person;

console.log('personName',personName);


//array destructuring
let numbers= [2,3,5,2,9]

let [x,y] = numbers;  // x= numbers[0], y=numbers[1]

//what if I want 1st and 3rd value

let [a,,b] = numbers; //a=numbers[0], b= numbers[2]

//what if I want 1st and 50th value

// you may write let [p,,,,,,(49 times), q]=numbers
//but no need for such complication
//use old ways
let p = numbers[0]
let q=  numbers[49]
