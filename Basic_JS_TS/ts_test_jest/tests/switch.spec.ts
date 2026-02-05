import {Switch} from '../src/switch'

//Helper Object
type ContextData = {
    context: String,
    params?: any
}
function switchAction() {
    let data: ContextData = {
        context: ""

    }
    function innerFunction(context: string, params?: any) {
        data.context = context;
        data.params = params;
        return context;
    }

    innerFunction.data = data

    return innerFunction
}

describe('Switch Component', () => {
    let _switch: Switch<string>;
   // let _intSwitch:Switch<number>;
    describe('Creation', function () {
        it('should create a switch with specific case context type', function () {

            let _switch = new Switch<string>()
            expect(_switch.cases).not.toBeUndefined()
            expect(_switch.defaultCase).toBeUndefined()
        })

    })

    describe('addCase', function () {


        beforeEach(function () {
            _switch = new Switch<string>()
        })

        it('should take arguments of type context and function that takes context and additional parameter of type any', function () {
            _switch.addCase('one', (context: string, params?: any) => "one")
            expect(_switch.cases).toHaveLength(1)
        })

        it('should be chainable', () => {
            _switch 
                .addCase("one", (context: string, params?: any) => "one")
                .addCase("two", (context: string, params?: any) => "two");

            expect(_switch.cases).toHaveLength(2)
        })



        it('should allow adding default case', () => {
            _switch.addDefault((context: string, params: any) => context)
            expect(_switch.defaultCase).not.toBeUndefined()
        })
        it('should keep default case separate from other cases', () => {
            _switch.addDefault((context: string, params: any) => context)
            expect(_switch.defaultCase).not.toBeUndefined()
            expect(_switch.cases).toHaveLength(0)
        })

        it('should throw error for duplicate case addition', function () {
            //Arrange
            _switch.addCase('one', function (context: string) { })

            //Act+expect
            expect(() => _switch.addCase("one", function (context: string) { })).toThrow('Duplicate Case');

        })
    })

    describe('Execution', function () {

        let one:any;
        let two:any;
        //arrange
        beforeEach(function () {



            _switch = new Switch<string>();
            one= switchAction()
            two = switchAction()
            _switch
                .addCase("one", one)
                .addCase("two", two)
        })

        it('should call the right case if present', () => {
            _switch.execute('one');

            expect(one.data.context).toBe('one');

        })
        it('should not call other cases', () => {
            _switch.execute('one')

            expect(two.data.context).toBe('')

        })

        it('should return the value returned by the case function',()=>{
            let result = _switch.execute('one');
            expect(result).toBe('one')
        })

        it('should throw error if no valid case is passed and no defaultCase is present',()=>{

            expect(()=> _switch.execute('invalid')).toThrow('Invalid Case')
        })

        it('should call defaultCase for invalid context, if present',()=>{
            //arrange
            let defaultCase= switchAction()
            _switch.addDefault(defaultCase)

            //act
            let unknownContext='unknown context'
            let result =_switch.execute(unknownContext)

            expect(result).toBe(unknownContext)
            expect(defaultCase.data.context).toBe(unknownContext)
            
        })
    })
});