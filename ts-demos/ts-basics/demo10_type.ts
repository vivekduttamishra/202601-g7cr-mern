

type CompositeName={
    firstName:string,
    middleName?:string,  // ? ---> optional
    lastName:string
}

type Name = CompositeName | string;

let n1:Name = "Vivek Dutta Mishra" // ok
let n2:Name = {firstName:'Vivek', middleName:'Dutta', lastName:'Mishra'} //ok
let n3:Name = {firstName:'Sanjay', lastName:'Mall'} //ok. missing middle name is fine
//let n4:Name=  {firstName:'Aman', middleName:'Kumar'} //not ok. missing last name is not fine


type Author= {
    name: Name,  //required
    biography: string, //required
    photograph?:string //optional
}

let author1: Author = {
    name: 'Vivek Dutta Mishra',
    biography: 'The Author of the Lost Epic Series'
    //it ok not to include optional property photograph
}
console.log('author1 without photoraph',author1);

//the optional and required property can be added/modified later
author1.photograph ='vivek.jpg'
author1.biography += ' and Manas';
console.log('author1',author1);

//but we can't add new propery
author1.email="vivek@thelostepic.com" //can't dynamically add new property