

function counter(max){
    //i and j are assumed to be defined here
    //console.log('before loop:', 'i:',i, '\tlast:', last);
    for(let i=0;i<max;i++){
        console.log(i);
        let last=i
    }
    
    //console.log('after loop:', 'i:',i, '\tlast:', last);    

}

counter(5)

var a=20;
var a="Hi"; //allowed. changes the value

let b=20; //allowed
b="Hi"; //allowed;
//let b=30; //not allowed