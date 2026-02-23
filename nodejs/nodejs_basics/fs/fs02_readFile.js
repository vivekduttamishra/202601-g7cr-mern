import fs from 'fs'


let startTime = new Date()

const readFile = fileName => {
    fs.readFile(fileName,         
        (error, data) => {
        let endTime=new Date()
        if (error) {
            process.stderr.write('error reading', fileName, error.message)
        } else {

            process.stdout.write(`Total data read for ${fileName} is ${data.length}`)
        }


        console.log(`Total time taken to read ${fileName} is ${endTime-startTime } ms`)
    })
    
    console.log('\n\nReading', fileName)
}

//readFile('./fs/invalidfile.text')
readFile('./fs/very-big.txt')
readFile('./fs/sample.text')
readFile('./fs/big.txt')