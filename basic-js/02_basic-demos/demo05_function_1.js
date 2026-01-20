

function greet(name){
    return 'Hello '+name+'!';
}


function printGreet(name, times){
    console.log('Greeting '+ name + ' for '+ times + ' times:');
    for(let i=0;i<times;i++){
        console.log(greet(name));
    }
    console.log('---')
}

printGreet('Alice', 3);
printGreet('Bob', 2);