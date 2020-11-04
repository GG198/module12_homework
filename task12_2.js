/* 12.2 Написать функцию, которая принимает в качестве аргументов строку и объект,
а затем проверяет есть ли у переданного объекта свойство с данным именем.
Функция должна возвращать true или false.
*/

function getResult (str, obj){
    let result;
    if(str in obj){
        alert ('true');
    } else {
        alert ('false');
    }
}


object1 = {
    book: 'House of Shadows',
    autor: 'Nicola Cornick',
};
let name = 'book';
getResult(name, object1);
