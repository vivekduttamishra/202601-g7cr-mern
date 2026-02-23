import fs from 'fs'

const data = fs.readFileSync('./fs/sample.text', 'utf-8')

console.log('data',data)