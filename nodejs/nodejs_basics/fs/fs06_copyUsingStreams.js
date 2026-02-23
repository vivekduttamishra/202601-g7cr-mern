import fs, { createReadStream, createWriteStream } from 'fs'
import { EventEmitter } from 'events'


function copyFile(srcFile, targetFile){
    let event=new EventEmitter() //we will inform you when file is fully copied.

    let buffer=""; //we will save a chunk a time
    let packets=[];
    let firstChunk=true;
    let readBytes=0;
    let writeBytes=0;
    let readCount=0;
    let writeCount=0;

    let source = createReadStream(srcFile, 'utf-8')
    let target= createWriteStream(targetFile, 'utf-8')
    let readOver=false;
    source
        .on('error',(error)=>{
            process.stderr.write(`Error reading source: ${error.message}\n`)
            target.close();
        })
        .on('data', data =>{
            readBytes+=data.length
            readCount++;
            process.stdout.write('+')
            if(firstChunk){
                writeBytes+=data.length
                writeCount++
                process.stdout.write('-')
                target.write(data) //write and wait for write to finish
                firstChunk=false;
            } else{
                //i am not sure if file can handle more write
                //so I will save the data in memory till file is ready to write
                buffer+=data;
            }
        })
        .on('close',()=>{
            //we read the data
            //now we can close the target file.
            readOver=true; 
            process.stdout.write(" X ")
        });

    target
        .on('error',(error)=>process.stderr.write(`Error writing target: ${error.message}`))
        .on('close',()=>{
            console.log('target file is closed')
            event.emit('done',{readBytes,readCount, writeBytes,writeCount})  
        })
        .on('drain',()=>{
            //previous right has finished
            //I am ready for more
            process.stdout.write("?")
            if(readOver && buffer.length===0){
                console.log('target is closed')
                target.close();
                
            }
            
           while(!buffer.length)
            ;


            writeBytes+=buffer.length
            let w= buffer;
            target.write(w); //write this piece of information 
            process.stdout.write('-')
            buffer="" //now buffer is empty
            writeCount++;
            
        });

    return event

}

copyFile('./fs/very-big.txt', './fs/very-big-2.txt')
    .on('done', console.log)