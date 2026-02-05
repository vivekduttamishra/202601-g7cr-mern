

function factorial(n){
    
    return new Promise((resolve,reject)=>{
        
        if(isNaN(n)|| n<0)
            return reject(new Error(`Invalid Input: ${n}`))

        let fn=1

        const iid=setInterval(()=> {
            fn*=n--
            if(n===0){
                clearInterval(iid)
                return resolve(fn)
            }
        },1000)

    });

}

function testFactorial(x){
    
    let fp = factorial(x)
    console.log('Calculating factorial of ',x)
    fp
        .then(fx=> console.log(`${x}! = ${fx}`))
        .catch(error=> console.log(error.message))

}

testFactorial(15)
testFactorial('Hi')
testFactorial(5)
testFactorial(12)