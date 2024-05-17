"use strict";
// Alias Type -> apelido ou pseudônimo
{
    const user = {
        firstName: 'Pedro',
        age: 19
    };
    console.log(user);
}
// Union Type -> armazenar dois tipos primitivos em uma variavel ou argumento
{
    function userInput(value1, value2) {
        let result;
        if (typeof value1 === 'number' && typeof value2 === 'number') {
            result = value1 + value2;
        }
        else {
            result = value1.toString() + value2.toString();
        }
        return result;
    }
    const combinePrices = userInput(10, 20);
    console.log(combinePrices);
    const combineName = userInput('Apple', 'Banana');
    console.log(combineName);
}
// Literal Type -> Definir valores especificos
{
    let productPrice;
    let productSize;
    productPrice = 10;
    productSize = 'M';
}
// Intersection -> Combinar dois objetos ou duas alias
{
    const e1 = {
        firstName: 'Andre',
        age: 31,
        id: 221,
        role: 'Admin'
    };
}
