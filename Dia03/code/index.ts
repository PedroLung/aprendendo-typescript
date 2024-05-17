// Alias Type -> apelido ou pseudônimo
{
  // Substituir:
  // const user: {
  //   firstName: string
  //   age: number
  // } = {
  //   firstName: 'Pedro',
  //   age: 19
  // }
  // ALIAS:
  type Users = {
    firstName: string
    age: number
  }

  const user: Users = {
    firstName: 'Pedro',
    age: 19
  }

  console.log(user)
}
// Union Type -> armazenar dois tipos primitivos em uma variavel ou argumento
{
  function userInput(value1: number | string , value2: number | string) {
    let result 
    if(typeof value1 === 'number' && typeof value2 === 'number'){
      result = value1 + value2
    } else {
      result = value1.toString() + value2.toString()
    }
    
    return result
  }

  const combinePrices = userInput(10, 20)
  console.log(combinePrices)

  const combineName = userInput('Apple', 'Banana')
  console.log(combineName)
}
// Literal Type -> Definir valores especificos
{
  let productPrice: 10 | 20 | 30
  let productSize: 'S' | 'M' | 'L'

  productPrice = 10
  productSize = 'M'
}
// Intersection -> Combinar dois objetos ou duas alias
{
  type User = {
    firstName: string
    age: number
  }

  type JobRole = {
    id: number
    role: string
  }

  type employee = User & JobRole

  const e1: employee = {
    firstName: 'Andre',
    age: 31,
    id: 221,
    role: 'Admin'
  }
}