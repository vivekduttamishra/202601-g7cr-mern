
//step #1 create an object
//you don't need a class
let p = new Object();

//Now p is an object but we don't know much about it.
console.log('p',p);

//now we can add properties to it after the object comes into existence.
p.x=3;
p.y=4;

//now p has some properties that can be used.
console.log('p',p);
console.log('p.x',p.x);
console.log('p.y',p.y);


//we can create different type of object also
//we create object the same class-less way
let p2= new Object();

//and attach relevant properties
p2.name="Sanjay";
p2.age=50;
console.log('p2',p2);

