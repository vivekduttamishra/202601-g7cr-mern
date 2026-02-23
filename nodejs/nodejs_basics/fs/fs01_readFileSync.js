import fs, { read } from 'fs'

let startTime = new Date()
const readFileSync = (fileName) => {
    try {
        console.log('reading', fileName)
        const data = fs.readFileSync(fileName, 'utf-8')
        console.log('data', data.length)
    } catch (error) {
        console.log(`error reading ${fileName}; ${error.message}`)
    }
    let endTime = new Date();
    console.log('total time taken to read ', fileName, (endTime - startTime))
}

readFileSync('./fs/big.txt')
readFileSync('./fs/invalid.txt')
readFileSync('./fs/sample.text')
readFileSync('./fs/very-big.txt')