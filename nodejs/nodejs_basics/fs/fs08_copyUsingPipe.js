import fs, { createReadStream, createWriteStream } from 'fs'
import { EventEmitter } from 'events'


function copyFile(srcFile, targetFile) {
    const source = createReadStream(srcFile, { encoding: 'utf8' })
    const target = createWriteStream(targetFile, { encoding: 'utf8' })
    
    return source.pipe(target)  //returns target object
}


let targetStream=copyFile('./fs/very-big.txt', './fs/very-big-3.txt')
    
targetStream.on('close',()=>console.log('file copied'));
    