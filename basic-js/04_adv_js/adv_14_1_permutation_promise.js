

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

function permutation(n, r) {
        
        return new Promise((resolve, reject) => {
            if (r > n)
                return reject(new Error(`Invalid range ${n}P${r}`))

            let pFn = factorial(n)
            let pFn_r = factorial(n - r)

            Promise
                .all([pFn, pFn_r])
                .then(results => {
                    let [fn, fn_r] = results
                    
                    resolve(fn / fn_r)

                })
                .catch(e => console.log(e))
        });


}


function testPermutation(n, r) {

    let start = new Date()

    permutation(n, r)
        .then(p => {
            let end = new Date()
            let timeTaken = end - start;
            console.log(`${n}P${r}=${p}.\tTotal Time taken: ${timeTaken}`)
        })
        .catch(e => console.log(`error calculating ${n}P${r}: ${e.message}`))

    console.log(`calculating ${n}P${r}...`)
}

testPermutation(5, 3)

testPermutation(3,4)

testPermutation(7, 2)