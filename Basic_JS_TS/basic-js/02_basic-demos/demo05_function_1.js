

function greet(name){
    return 'Hello '+name+'!';
}


function printGreet(name, times){

    //ES5 way to default times
    if(times===undefined)
        times=1

    console.log('Greeting '+ name + ' for '+ times + ' times:');
    for(let i=0;i<times;i++){
        console.log(greet(name));
    }
    console.log('---')
}

printGreet('Alice', 3);
printGreet('Bob', 2);
printGreet('Sanjay');