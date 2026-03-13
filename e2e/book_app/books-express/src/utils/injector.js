
import dotenv from 'dotenv'
dotenv.config()

export const MODE_PERCALL="MODE_PERCALL"
export const MODE_SINGLETON="MODE_SINGLETON"

let catalog = {
    // mongooseConnectionString: process.env.MONGODB_URL,
    // authorRepository:{ mode: "singleton", constructor: AuthorRepository, instance:null},
    // bookRepoaitory: {mode: MODE_PERCALL, factory: createBookRepository, instance:null}
}

const add = (key, descriptor) => {

    const defaults={
        instance:undefined,
        mode:MODE_SINGLETON,

    }

    if(typeof descriptor==='function'){
        if (descriptor.toString().trim().startsWith("class")){
            //console.log('adding', key, 'as constructor')
            descriptor={...defaults, type:descriptor}
        }
        else{
           //console.log('adding', key, 'as factory')
            descriptor={...defaults, factory:descriptor}
        }
    } else if( typeof descriptor !== 'object'){
   //     console.log(`received`, key, descriptor)
        descriptor={...defaults, instance:descriptor}
    }

   // console.log('catalog',catalog);
    

    if(!(descriptor.instance!==undefined || descriptor.factory || descriptor.type))
        throw new Error('Invalid Descriptor. Must include either constructor or instance or factor')

    if(!descriptor.dependencies){
        if(descriptor.type)
            descriptor.dependencies=findDependencyList(descriptor.type)
        if(descriptor.factory)
            descriptor.dependencies=descriptor.factory._dependencies??[]
    }
    descriptor.key=key
    catalog[key] = descriptor
    
    return this;
    
}

const findDependencyList = (Component) => {
   
    let str = Component.toString()
    let index = str.indexOf("constructor")
    if (index === -1)
        return []

    str = str.substring(index + 'constructor'.length)
    index = str.indexOf(")")
    str = str.substring(0, index).replace('(', '')
    return str.split(",").map(a => a.trim()).filter(a => a)

}

const createInstance = (descriptor,context) => {
    
    let dependencyNames = descriptor.dependencies
    //console.log('finding dependencies for ',descriptor.key, dependencyNames)

    let args=[]
    //console.log('finding dependencies', dependencyNames)
    for(let dependencyName of dependencyNames){
        let dependency= _get(dependencyName,context)
        args.push(dependency)
    }

    let instance = null
  //  console.log('creating from ', descriptor.key)
    if(descriptor.type){
        //console.log('constructor called')
        instance= new descriptor.type(...args) 
    }else{
        //console.log('factory called')
        instance=descriptor.factory(...args)
    }
    //console.log('created ',descriptor.key, 'using', args, '=>',instance)
    return instance;


}

//context eliminates multiple object creation in per call  and avoid cyclic issues

const _get = (key, context={}) => {
    //create and return an object of given key type
    
    if(context[key]!==undefined)
        return context[key]

    let descriptor = catalog[key]
    //console.log('finding key ', key, descriptor)
    
    if(!descriptor)
        throw new Error(`No Dependency Found for Key: ${key}`)

    if(descriptor.instance!==undefined){
        context[key]=descriptor.instance
        return descriptor.instance
    }


    const instance= createInstance(descriptor,context)
    context[key]=instance
    if(descriptor.mode===MODE_SINGLETON)
        descriptor.instance=instance;

    return instance;
}

export default{
    add,
    get: (key)=>_get(key),
    reset:()=>{ catalog={}},
    catalog:()=>({...catalog})
}


