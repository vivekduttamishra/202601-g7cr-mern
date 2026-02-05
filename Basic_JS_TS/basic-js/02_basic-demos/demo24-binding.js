
class Person{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }

    getLabeledEmail(){
        return `${this.name} <${this.email}>`;
    }
}

let person= new Person('Sanjay','sanjay@gmail.com')
console.log('person.getLabeledEmail()',person.getLabeledEmail());


function sendEmail(emailFinder,message){
    let email = emailFinder();
    console.log(`sending ${message} to ${email}`)
}

sendEmail( person.getLabeledEmail,'Hello, JS World')