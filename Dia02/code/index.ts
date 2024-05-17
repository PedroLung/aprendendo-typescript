// TIPOS PRIMITIVOS
/* 
  Tipos do TypeScript:
  any
  unknown
  tuple
  never
  enum

  + os tipos do JavaScript:
  number
  string
  boolean
  undefined
  object
  null
*/

// EXEMPLOS:
// Any quebra a lógica da tipagem forte do Ts (ATENÇÃO: Tente sempre evitar)
{
  let value
  value = 10
  value = 'Pedro'

  let qualquer: any = true
  qualquer = 100
}
// As Arrays
{
  let values: number[] = [10, 20, 40, 30]
}
// Tuples
{
  // Item: Apple, Valor: 3, Estoque: true

  let item: [string, number, boolean] = ['Apple', 3, true] // Tuple
}
// Enum
{
  // Sem Enum:
  {
    const admin = 1
    const read = 2
    const backup = 3

    const user = {
      firstName: 'Pedro',
      age: 19,
      role: 3
    }
  }

  // Com Enum:
  {
    enum Role {
      admin = 1,
      read = 2,
      backup = 3
    }

    const user = {
      firstName: 'Pedro',
      age: 19,
      role: Role.backup
    }
    console.log(user)
    console.log(3 === Role.backup)
  }
}
// Function Return
{
  function add(num1: number, num2: number): number {
    return num1 + num2
  }
  // O return tbm tem o seu tipo primitivo
}
// Function Void
{
  // Função sem return
  function result(price: number) {
    console.log('The result is', price)
  }
  result(10)
  console.log(result(10)) // Resultado: Undefined
}
// Objetos
{
  // Por boas práticas não usamos este tipo de hardcode:
  const user: {
    firstName: string
    age: number
    lastName: string
  } = {
    firstName: 'Andre',
    age: 40,
    lastName: 'S'
  }

  user.lastName = 'Iacono';
}
// Unknown
{
  let itemInput: unknown
  let itemName: string

  itemInput = 10
  itemInput = 'Apple'
  // ERRO:
  // itemName = itemInput -> itemName precisa ser String
  if(itemInput === 'string'){
    itemName = itemInput
  }
}
// Never -> para não retornar nenhum valor na função, nem mesmo o undefined normalmente para gerar um erro
{
  function generateError(msg: string, code: number): never{
    throw {
      message: msg,
      errorCode: code
    }
  }

  generateError('The application crashed', 500)
  console.log( generateError('The application crashed', 500) )
}
