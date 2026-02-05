import { BankAccount } from "./bank-account.js";

let password='p@ss'
let balance=20000
let account=new BankAccount('Vivek',password, balance)

console.log(`account = ${account}`);

account.deposit(100)
console.log(`account after deposit = ${account}`);

// account.withdraw(1000, "wrong password")
// console.log(`account = ${account}`);

account.withdraw( balance+1, password) //let's this should fail for insufficient balance
console.log(`account = ${account}`);




