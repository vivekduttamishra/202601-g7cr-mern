let sleep = require('./async-utils')

async function factorial(n){
    let fn=1
    while(n){
        fn*=n--;
        await sleep(1000)
    }

    return fn;
}

async function permutation(n,r){
    let pFn= factorial(n)
    let pFn_r= factorial(n-r)
    
    let [fn,fn_r] = await Promise.all([pFn, pFn_r])

    return fn/fn_r;
}


async function private(){
    console.log('Not for other modules')
}

//I want to export two functions: export an object
module.exports={
    factorial,
    permutation
}

