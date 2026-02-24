import fs, { createReadStream, createWriteStream } from 'fs'
import { EventEmitter } from 'events'


function copyFile(srcFile, targetFile) {
    const event = new EventEmitter()

    let readBytes = 0
    let writeBytes = 0
    let readCount = 0
    let writeCount = 0

    const source = createReadStream(srcFile, { encoding: 'utf8' })
    const target = createWriteStream(targetFile, { encoding: 'utf8' })

    source
        .on('error', err => {
            process.stderr.write(`Error reading source: ${err.message}\n`)
            target.destroy(err)
        })
        .on('data', chunk => {
            readBytes += chunk.length
            readCount++
            process.stdout.write('+')

            const canWriteMore = target.write(chunk)
            writeBytes += chunk.length
            writeCount++
            process.stdout.write('-')

            if (!canWriteMore) {
                source.pause()
            }
        })
        .on('end', () => {
            // no more data, ask target to finish when its buffer is flushed
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
            event.emit('done', { readBytes, readCount, writeBytes, writeCount })
        })

    return event
}


copyFile('./fs/very-big.txt', './fs/very-big-2.txt')
    .on('done', console.log)