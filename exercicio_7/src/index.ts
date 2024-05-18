// Day 5 - Exercise 2
interface Person {
  name: string
  age: number
}

class Person implements Person{
  constructor (public name: string, public age: number) {}
}

const jane = new Person('Andre', 29);

console.log(`${jane.name} is ${jane.age} years old.`);