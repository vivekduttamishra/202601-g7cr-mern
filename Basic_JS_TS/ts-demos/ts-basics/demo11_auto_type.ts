

//what is the type of name below
let name='Vivek Dutta Mishra' //implicitly considered string based on value assigned


let person = {
    name:name,
    email:'vivek@conceptarchitect.in'
}

console.log('person',person);

//what is the type of person?
//type {name:string, email:string}
//person.phone="00303039393"; //not allowed


let person2: any = {
    name: 'Sanjay',
    email: 'sanjay@gmail.com'
} //no new type is created.

person2.phone='9939393939';
console.log('person2',person2);

