import fs from 'fs'


const readFile = fileName => {
    fs.readFile(fileName, 'utf-8', 
        
        (error, data) => {
        if (error) {
            process.stderr.write(error.message)
        } else {

            process.stdout.write(data)
        }
    })
    
    console.log('\n\nReading', fileName)
}

readFile('invalidfile.text')

readFile('./fs/sample.text')