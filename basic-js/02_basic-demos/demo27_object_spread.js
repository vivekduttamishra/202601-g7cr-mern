
let person={ name:'Sanjay', age:50, email:'sanjay@gmail.com'}


//now if we need to make this person an employee
//employee will have
// empId, salary, email (companyEmail)
//and all personal details : name, age, email


//to create employe in usual way.
let emp = { empId:112, 
            salary:400000,
            email: 'sanjay@company.com',
            //manually copy personal details
            name:person.name,
            age:person.age,
            //what to do with personal email?
            //we can't have two emails.
           email: person.email, // overwrite official email
        
        }

console.log('emp',emp);


//ES2015 feature

let emp2= {
    //new features
    id:113,
    salary:500000,
    email: 'sanjay@company.com',
    //personal details
    ...person  
    //will overwrite company email
}

console.log('emp2',emp2);


//to keep both and company email as default
let emp3={
    //spread personal details first
    ...person,
    //now overwrite company details
    id:114,
    salary:500000,
    email:'sanjay@compnay.com',
    //we lost personal email
    //reinsert that one with a different key
    personalEmail: person.email
}

console.log('emp3',emp3);
