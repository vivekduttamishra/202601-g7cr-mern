import { permutation} from './math.js'

async function testPermutation(n,r){
    let start= new Date()
    let p = await permutation(n,r)
    let end= new Date();
    console.log(`${n}P${r}=${p}\tTime taken is ${end-start}ms`)
}


testPermutation(5,3)
testPermutation(7,1)


async function onClick(){
    let n= Number(document.getElementById('n').value)
    let r= Number(document.getElementById('r').value)
    let result=document.getElementById("result")
    result.innerHTML="wait..."
    let p = await permutation(n,r)
    console.log('p',p);
    result.innerHTML=p
}
window.onClick=onClick
