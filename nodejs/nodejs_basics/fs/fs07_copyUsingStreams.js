import fs, { createReadStream, createWriteStream } from 'fs'
import { EventEmitter } from 'events'


function copyFile(srcFile, targetFile) {
    const source = createReadStream(srcFile, { encoding: 'utf8' })
    const target = createWriteStream(targetFile, { encoding: 'utf8' })
    const event=new EventEmitter();
    source
        .on('error', err => {
            process.stderr.write(`Error reading source: ${err.message}\n`)
            target.destroy(err)
        })
        .on('data', chunk => {
            const canWriteMore = target.write(chunk)
            if (!canWriteMore) {
                source.pause()
            }
        })
        .on('end', () => {
            target.end()
        })

    target
        .on('drain', () => {
            source.resume()
        })
        .on('error', err => {
            process.stderr.write(`Error writing target: ${err.message}\n`)
        })
        .on('close', () => {
            event.emit('done')
        })

     return event
}


copyFile('./fs/very-big.txt', './fs/very-big-2.txt')
.on('done',()=>console.log('file copied'));
    