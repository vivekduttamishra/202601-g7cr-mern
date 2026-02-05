

let id= setTimeout(()=>console.log('Hello World'),10000)

//we reach here immediately


setTimeout(()=>{
    console.log('Sorry announcement cancelled')
    clearTimeout(id)
},5000)


console.log('wait for 10 seconds for an important announcement')
