

function counter(max){
    //i and j are assumed to be defined here
    console.log('before loop:', 'i:',i, '\tlast:', last);
    for(var i=0;i<max;i++){
        console.log(i);
        var last=i
    }
    
    console.log('after loop:', 'i:',i, '\tlast:', last);    

}

counter(5)