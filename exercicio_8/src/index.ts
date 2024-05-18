// Day 5 - Exercise 3

class MC {
  greet(event: string = 'party'): string {
    return `Welcome to the ${event}`;
  }
}

const mc = new MC();
console.log(mc.greet('show'));