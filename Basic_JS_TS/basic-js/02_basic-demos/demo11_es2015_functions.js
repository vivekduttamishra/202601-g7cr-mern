function greet(name){
    return 'Hello '+name+'!';
}

//ES2015 allows default argument for parameter
function printGreet(name, times=1){
    //if(times===undefined) times=1
    console.log('Greeting '+ name + ' for '+ times + ' times:');
    for(let i=0;i<times;i++){
        console.log(greet(name));
    }
    console.log('---')
}

printGreet("Alice", 3);
printGreet("Bob", 2);
printGreet('Sanjay'); //-> printGreet('Sanjay', 1)