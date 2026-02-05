
let max =10;

const id =setInterval(()=>{
    console.log(max);
    max--;
    if(max<0)
        clearInterval(id)
}, 1000)

console.log('Starting Countdown...')

