
let max =10;

const id =setInterval(()=>{
    console.log(max);
    max--;
}, 1000)

console.log('Starting Countdown...')

setTimeout(()=>{
    clearInterval(id)
},11000);  //call this after 10 seconds