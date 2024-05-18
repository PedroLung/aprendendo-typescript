// Day 5 - Exercise 4

class Employee {
  constructor(public title: string, public salary: number) {}
}

const employee = new Employee('Engineer', 100000);

console.log(`The new employee's title is ${employee.title} and they earn $ ${employee.salary}.`);