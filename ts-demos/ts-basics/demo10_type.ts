

type CompositeName={
    firstName:string,
    middleName?:string,  // ? ---> optional
    lastName:string
}

type Name = CompositeName | string;


type Author= {
    name: Name,
    biography: string,
    photograph?:string
}

let n1:Name = "Vivek Dutta Mishra" // ok
let n2:Name = {firstName:'Vivek', middleName:'Dutta', lastName:'Mishra'} //ok
let n3:Name = {firstName:'Sanjay', lastName:'Mall'} //ok. missing middle name is fine
//let n4:Name=  {firstName:'Aman', middleName:'Kumar'} //not ok. missing last name is not fine