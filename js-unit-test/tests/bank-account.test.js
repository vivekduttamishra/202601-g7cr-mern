
import { test, it, describe,  beforeEach } from 'node:test'
import { BankAccount } from '../src/bank-account.js'
import Assert from 'assert'



//test is a predefined function provided by node
const password = 'p@ss'
const balance = 20000


describe('BankAccount', () => {

    describe('Deposit', () => {
        let account;
        
        beforeEach(()=>{
            //beforeEach will be called before calling each test
            account = new BankAccount('Test Account', password, balance)
        })
        test('that deposit succeeds on positive amount', () => {

            account.deposit(1)

            //Assert: Throw error if code didn't give expected result
            Assert.deepEqual(account.balance, balance + 1)
        })

        test('that deposit fails on negative amount', () => {

            //Assert

            Assert.throws(() => account.deposit(1), { message: 'Invalid Amount' })
        })

    })

    describe('withdraw', () => {

        it('should allow withdraw of valid amount with valid password', () => {
            let account = new BankAccount('Test', password, balance)
            account.withdraw(1, password)

            Assert.deepEqual(balance - 1, account.balance)
        })

        it('should fail to withdraw with invalid password', () => {
            let account = new BankAccount('Test', password, balance)

            Assert.throws(() => account.withdraw(1, "wrong-password"), { message: 'Invalid Password' })
        })
        it('should fail to withdraw with insufficient balance', () => {
            let account = new BankAccount('Test', password, balance)

            Assert.throws(() => account.withdraw(balance + 1, password), { message: 'Insufficient Balance' })
        })
        it('should fail to withdraw negative amount', () => {
            let account = new BankAccount('Test', password, balance)

            Assert.throws(() => account.withdraw(-1, password), { message: 'Invalid Amount' })
        })

    })

})
