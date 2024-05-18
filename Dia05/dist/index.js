"use strict";
class Users {
    constructor(n, b) {
        this.balance = 0;
        this.name = n;
        this.balance = b;
    }
    addMoney(amount) {
        try {
            this.balance += amount;
        }
        catch (err) {
            console.log(err);
        }
        return;
    }
    removeMoney(amount) {
        try {
            this.balance -= amount;
        }
        catch (err) {
            console.log(err);
        }
    }
}
const user1 = new Users('Pedro', 10);
user1.addMoney(100);
const user2 = new Users('Andre', 20);
user2.addMoney(20);
user2.removeMoney(10);
console.log(user1);
console.log(user2);
const product1 = {
    name: 'apple',
    price: 2,
    itemPurchased(message) {
        console.log(message, this.name);
    }
};
product1.itemPurchased('You just bought a');
