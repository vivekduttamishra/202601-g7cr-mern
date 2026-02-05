//ES 2015 introduced two new keywords for variable declaration: let and const
// let works like var expcept in special situation we will discuss later
let x=20;
console.log(typeof x, x); //number

// const is used to declare constant variable whose value cannot be changed
const pi=3.14;
console.log(typeof pi, pi); //number
pi=10; //This will throw error