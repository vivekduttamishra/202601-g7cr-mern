

//returns a promise
function factorial(n) {

    return new Promise((resolve, reject) => {

        if (isNaN(n) || n < 0)
            return reject(new Error(`Invalid Input: ${n}`))

        let fn = 1

        const iid = setInterval(() => {
            fn *= n--
            if (n === 0) {
                clearInterval(iid)
                return resolve(fn)
            }
        }, 1000)

    });

}

//any function that returns a promise is just like an async function
//it can be awaited.

async function permutation(n, r) {

    if (r > n)
        throw new Error(`Invalid range ${n}P${r}`)

    let fn = await factorial(n)
    let fn_r= await factorial(n-r)

    return fn/fn_r  //a promised return


}


async function testPermutation(n, r) {

    try{
        console.log(`calculating ${n}P${r}...`)
        let start = new Date()
        let p = await permutation(n,r)
        let end = new Date()
        let timeTaken = end - start;
        console.log(`${n}P${r}=${p}.\tTotal Time taken: ${timeTaken}`)
    }catch(e){

        console.log(`error calculating ${n}P${r}: ${e.message}`)
    }
  
}

testPermutation(5, 3)

testPermutation(3, 4)

testPermutation(7, 2)