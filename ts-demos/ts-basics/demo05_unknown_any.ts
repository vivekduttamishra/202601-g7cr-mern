
function getRandomValue(){
    return Math.random() > 0.5 ? 10 : "Hello";
}




let unknown1: unknown = 20; //allowed

unknown1= 'Hi' ;  //allowed.

let  unknown2: unknown = getRandomValue(); //allowed

console.log('unknown2',unknown2);


if(typeof(unknown2)=== 'string')
    console.log(`unknown2.toLowerCase() = ${unknown2.toLowerCase()}`);




//How is it different from any?

let any1: any = 20; //allowed

any1= 'Hi' ;  //allowed.

let  any2: any = getRandomValue(); //allowed
console.log('any2',any2);

console.log(`any2.toLowerCase() = ${any2.toLowerCase()}`);
