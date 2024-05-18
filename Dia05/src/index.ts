// Classes objetos propriedades metodos e visibilidade
class Users  {
  name: string
  private balance: number = 0

  constructor(n: string, b: number) {
    this.name = n
    this.balance = b
  }

  addMoney(amount: number) {
    try {
      this.balance += amount
    } catch(err){
      console.log(err)
    }
    return
  }

  removeMoney(amount: number) {
    try {
      this.balance -= amount
    } catch(err) {
      console.log(err)
    }
  }
}

const user1 = new Users('Pedro', 10)
user1.addMoney(100)

const user2 = new Users('Andre', 20)
user2.addMoney(20)
user2.removeMoney(10)

console.log(user1)
console.log(user2)

// Interface:

interface item {
  name: string
  price: number

  itemPurchased(message: string): void
}

const product1: item = {
  name: 'apple',
  price: 2,

  itemPurchased(message: string){
    console.log(message, this.name)
  }
}

product1.itemPurchased('You just bought a')