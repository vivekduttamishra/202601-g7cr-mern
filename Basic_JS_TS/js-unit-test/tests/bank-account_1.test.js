
import {test,it} from 'node:test'
import {BankAccount} from '../src/bank-account.js'
import {makeSure, makeSureTheyAreEqual,makeSureItThrows} from '../src/test-utils.js'




//test is a predefined function provided by node
const password='p@ss'
const balance=20000

test('that deposit succeeds on positive amount',()=>{
    let account = new BankAccount('Test Account',password, balance)
    account.deposit(1)

    //Assert: Throw error if code didn't give expected result
    makeSureTheyAreEqual(balance+1, account.balance)
})

test('that deposit fails on negative amount',()=>{
    //Arrange
    let account=new BankAccount('Test Account', password, balance)
   
    //Assert
    makeSureItThrows( ()=> account.deposit(-1), 'Invalid Amount')
    
})

//an alternative function provide by node for test is called "it"

it('should allow withdraw of valid amount with valid password',()=>{
    let account=new BankAccount('Test', password, balance)
    account.withdraw(1, password)
    
    makeSureTheyAreEqual(balance-1, account.balance)
})

it('should fail to withdraw with invalid password',()=>{
    let account=new BankAccount('Test', password, balance)
    
    makeSureItThrows(()=> account.withdraw(1,"wrong-password"), 'Invalid Password')
})
it('should fail to withdraw with insufficient balance',()=>{
    let account=new BankAccount('Test', password, balance)
    
    makeSureItThrows(()=> account.withdraw(balance+1,password), 'Insufficient Balance')
})
it('should fail to withdraw negative amount',()=>{
    let account=new BankAccount('Test', password, balance)
    
    makeSureItThrows(()=> account.withdraw(-1,password), 'Invalid Amount')
})