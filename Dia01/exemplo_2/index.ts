// Tipando a variavel para previnir erros
function add(num1: number, num2: number) {
  return num1 + num2
}
const result = add(5, 8)
console.log(result)

// ERRO:
// const result = add('5', 8)
// console.log(result)