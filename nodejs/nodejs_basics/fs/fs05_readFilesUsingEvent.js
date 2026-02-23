import fs, { createReadStream } from 'fs'



let fileName='./fs/very-big.txt'

let stream = createReadStream(fileName, 'utf-8')

let dataCount=0;
let packets=[]
let content=''

//stream emits few welknown events

stream
    .on('data', data=>{  //when we get the data
       // console.log('data',data);
       //dataCount+=data.length;
       packets.push(data.length);
       //content+=data;
        
    })
    .on('error', error=>{ //incase we receive error
        console.log('error',error);
        
    })
    .on('close', (close)=>{ //when file is closed.
        console.log('total read count:', packets.length)
        console.log(content)
        console.log('packets',packets);
        console.log('last packet size', packets.pop())
    })

