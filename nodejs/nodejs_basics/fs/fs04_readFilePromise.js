import {promises as fs} from 'fs'


let startTime = new Date()

const readFile = async(fileName) => {

    try{
        console.log('\n\nReading', fileName)
        let data = await fs.readFile(fileName,'utf-8')
        console.log(`${fileName} read. size:${(await data).length}`)
    }catch(error){
        console.log(`error: ${error.message}`)
    }
    const endTime=new Date()
    console.log(`Total time taken to read ${fileName} is ${endTime-startTime } ms`)
    
}

//readFile('./fs/invalidfile.text')
readFile('./fs/very-big.txt')
readFile('./fs/sample.text')
readFile('./fs/big.txt')