import fs, { createReadStream } from 'fs'
import { EventEmitter } from 'events'


let fileName='./fs/sample.text'

//stdout is a writable stream
createReadStream(fileName).pipe(process.stdout);

    