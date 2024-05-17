// Tipando a variavel para previnir erros
function add(num1, num2) {
    return num1 + num2;
}
var result = add(5, 8);
console.log(result);
// ERRO:
// const result = add('5', 8)
// console.log(result)
