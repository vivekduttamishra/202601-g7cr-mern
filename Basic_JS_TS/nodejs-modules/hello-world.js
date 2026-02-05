setTimeout(()=>{
    console.log("Hello");
    setTimeout(()=>console.log('World'),5000)
},5000)


function factorial(n){
    let fn=1
    const iid= setInterval(()=>{
        fn*=n--;
        if(n===0)
            clearInterval(iid);

    })
}

//how will I get the result from the factorial?
//how will I know the task is over?