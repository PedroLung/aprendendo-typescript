// // Day 5 - Exercise 5

// Day 5 - Exercise 5

interface UserSchema {
  id: number
  name: string
}

class User implements UserSchema {
  constructor(public name: string, readonly id: number) {}
}

const user = new User('Dog', 1)

console.log(user.id)

user.name = 'Harold' // pode mudar
// user.id = 5 // nao pode mudar

console.log(`User:`, user)

// Minha solução Inicial:
{
  // interface UserSchema {
  //   getId(): number
  //   name: string
  // }

  // class User implements UserSchema {
  //   constructor(public name: string, private id: number) {}

  //   public getId() {
  //     return this.id
  //   }

  //   public setId(id: number) {
  //     this.id = id
  //   }
  // }

  // const user = new User('Dog', 1)

  // console.log(user.getId())

  // user.name = 'Harold' // pode mudar
  // user.setId(5) // nao pode mudar

  // console.log(`User:`, user)
}
