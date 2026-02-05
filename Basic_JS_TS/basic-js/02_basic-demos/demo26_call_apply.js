
//an array print all.

function printAll(header,footer){
    console.log(`------${header}-----`)

    for(let i in this){
        if(typeof this[i]==='function')
            continue
        console.log(i, this[i])
    }
        

    console.log(`------${footer}-----`)
}

//implicit binding
const person={
    name:'Sanjay',
    age:25,
    email:'sanjay@gmail.com',
    show: printAll
}
//implicit this binding
person.show('Person Info','x')


let numbers=[2,3,9,2,6];
//can I bind this numbers and printAll


//permanent bind
//step#1 bind
const numbersPrinter=printAll.bind(numbers); //it doesn't change printAll, it creates new function

//step#2 call
numbersPrinter('numbers', 'o')


//binding+call

//option#1 call
printAll.call(numbers,'numbers','i'); //first parameter become this, others are like rest

//option#2 apply
printAll.apply(person, ['info','info-end']); //first parameter is this. function arguments passed as array