"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const jane = new Person('Andre', 29);
console.log(`${jane.name} is ${jane.age} years old.`);
