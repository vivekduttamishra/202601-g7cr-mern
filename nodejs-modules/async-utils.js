

const sleep= time=> new Promise(resolve=>setTimeout(resolve,time))

module.exports= sleep //this function will be available in another module
