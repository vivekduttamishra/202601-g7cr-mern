let lastId=0

export class BankAccount{
    constructor(name,password, balance){
        this.accountNumber=++lastId;
        this.name=name;
        this.password=password;
        this.balance=balance;
    }

    deposit(amount){
        if(amount<=0)
            throw new Error('Invalid Amount')
        this.balance+=amount
    }

    withdraw(amount, password){
        if(amount<=0)
            throw new Error('Invalid Amount')
        if(password!==this.password)
            throw new Error('Invalid Password')

        if(amount>this.balance)
            throw new Error('Insufficient Balance')

        this.balance-=amount;
        return true;
    }

    toString(){
        return `${this.accountNumber}\t${this.balance}\t${this.name}`
    }
}