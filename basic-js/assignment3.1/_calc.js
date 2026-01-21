//Business logic
function sum(){

    let total=0;
    for(let n of numbers){
        total+=n;
    }
    return total;
}

function average(){
    return sum()/numbers.length;
}