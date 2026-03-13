import {expect, should} from 'chai'
import injector, { MODE_PERCALL, MODE_SINGLETON } from './injector.js'
should()

describe('injector2 tests',function(){

    this.beforeEach(function(){
        injector.reset()
    })

    it('should be able to store and retrieve ',()=>{
        injector.add("connection","test")
        injector.add("magicNumber",0)

        console.log('injector.catalog()',injector.catalog());
        

        injector.get("connection").should.equal("test")
        injector.get("magicNumber").should.equal(0)
    })

    it('should be able to accept and use constructor',()=>{
        class A{}
        //please remember you have to give an object of class "A" 
        injector.add("a", A) 

        //when I ask get("a")
        let a = injector.get("a")
        
        expect(a).to.be.instanceOf(A)
        
    })

    it('shoule throw error if key is not found',()=>{
        class A{}
        injector.add("a",A)

        expect(()=>injector.get("b")).to.throw(/no dependency found/i)
    })

    it('should be able to inject dependency through constructor',()=>{
        class A{}
        class B{ constructor(a){this.a=a} }
        injector.add("a",A)
        injector.add("b",B)

        const b= injector.get("b")
        b.should.be.instanceOf(B)
        b.a.should.be.instanceOf(A)
    })

    it('should throw error if nested dependency is missing',()=>{
        class A{}
        class B{ constructor(a){this.a=a} }
        //injector.add("a",A) //intentionally not added
        injector.add("b",B)

        expect(()=>injector.get("b")).to.throw(/no dependency found for key: a/i)
    })

    it('should return same object for same key by default',()=>{
        class A{}
        injector.add("a",A) //MODE_SINGLETON by default

        const a1= injector.get("a") //object created
        const a2= injector.get("a") //same object reused

        a1.should.equal(a2)
    })

    it('should return different object if mode is PER_CALL',()=>{
        class A{}
        //create a new object on every get request
        injector.add("a", {type:A, mode:MODE_PERCALL})

        const a1= injector.get("a") //object created
        const a2= injector.get("a") //another object created
        console.log(a1===a2);
        
        a1.should.not.equal(a2)
    })

    it('should use same instance of dependency by default',()=>{
        class A{}
        class B{ constructor(a){this.a=a}}
        class C{ constructor(a){this.a=a}}
        class D{ constructor(b,c){this.c=c; this.b=b}}

        injector.add("a",A)
        injector.add("b",B)
        injector.add("c",C)
        injector.add("d",D)

        const d= injector.get("d")
        
        d.c.a.should.be.deep.equal(d.b.a)
    })

    it('should be able to call factory function',()=>{
        class A{ constructor(magicNumber){
             console.log("A constructor with magic number", magicNumber)
            this.magicNumber=magicNumber
        }}
        injector.add("a", A)
        injector.add("magicNumber", ()=>0)

        const a = injector.get("a")
        a.magicNumber.should.equal(0)
    })

    it('should reuse instance for default mode',()=>{
        class A{}
        injector.add("a",A)
        let a1= injector.get("a")
        let a2= injector.get("a")

        a1.should.equal(a2)

    })
    it('should create new instance for per call mode',()=>{
        class A{}
        injector.add("a",{mode:MODE_PERCALL, type:A})
        let a1= injector.get("a")
        let a2= injector.get("a")

        a1.should.not.equal(a2)

    })

    it('should use mode single by default',()=>{
        class A{}
        injector.add("a",A)

        injector.catalog().a.mode.should.equal(MODE_SINGLETON)
    })

    it('should use same instance for same request in per call but different instance for different get',()=>{
        class A{}
        class B{constructor(a){this.a=a}}
        class C{constructor(a){this.a=a}}
        class D{constructor(b,c){this.b=b;this.c=c}}
        injector.add("a",{mode:MODE_PERCALL, type:A})
        injector.add("b",{mode:MODE_PERCALL, type:B})
        injector.add("c",{mode:MODE_PERCALL, type:C})
        injector.add("d",{mode:MODE_PERCALL, type:D})

        let d1= injector.get("d")
        d1.b.a.should.deep.equal(d1.c.a)

        let d2= injector.get("d")

       // console.log('catalog', injector.catalog())
       // console.log('d1.b.a===d2.b.a',d1.b.a===d2.b.a);
        

        d1.b.a.should.not.equal(d2.b.a)

    })

})