// ReadOnly -> Quando você quer que a variavel seja acessada fora da classe, mas que não possa ser alterada
{
  class Movies {
    readonly id: number
    public name: string
    constructor(id: number, name: string){
      this.id = id
      this.name = name
    }
  }

  let movie1 = new Movies(1, 'FullMetal')
  console.log(movie1.id)
  console.log(movie1)
}
// Parâmetro do Construtor
{
  class Movies {
    constructor(
      public readonly id: number, 
      public name: string, 
      private _price: number){}

      get_Price(){
        return this._price
      }
  }

  let movie1 = new Movies(1, 'FullMetal', 20)
  console.log(movie1.id)
  console.log(movie1)
}
// Index Signatures -> Uma propriedade dinâmica que é criada depois em algum momento do código
{
  class HotelRooms {
    [roomNumber: string]: string
  }

  let room = new HotelRooms()

  room.A201 = 'Andre'
  room.A202 = 'Ana'
  room.A17 = 'Marcos'

  console.log(room)
}
// Inheritance
{
  class Person {
    constructor(public firstName: string, public lastName: string, public age: number){}

    greet(){
      console.log('Hi')
    }
  }

  // Cliente do Banco
  class Client extends Person {
    balance(){
      console.log('Your balance is $100')
    }
  }

  let Client1 = new Client('andre', 'iacono', 25)
  Client1.balance()
}
// Overriding
{
  class Person {
    constructor(public firstName: string, public lastName: string, public age: number){}

    get greet(){
      return this.firstName + ' ' + this.lastName
    }
  }

  // Cliente do Banco
  class Client extends Person {
    override get greet(){
      return 'Dear ' + super.greet
    }
  }

  // Funcionário do Banco
  class Staff extends Person {
    override get greet(){
      return 'Hi ' + super.greet
    }
  }

  let client1 = new Client('andre', 'iacono', 25)
  let staff1 = new Staff('Pedro', 'Guedes', 19)

  console.log(client1.greet)
  console.log(staff1.greet)
}