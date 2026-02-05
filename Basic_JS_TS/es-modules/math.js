import delay from './async-utils.js'

export async function factorial(n){
    let fn=1
    while(n){
        fn*=n--
        await delay(1000)
    }
    return fn
}

export async function permutation(n,r){
    let pfn=factorial(n)
    let pfn_r=factorial(n-r)
    let [fn,fn_r]= await Promise.all([pfn,pfn_r])
    return fn/fn_r
}