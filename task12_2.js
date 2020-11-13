/* 12.2 Написать функцию, которая принимает в качестве аргументов строку и объект,
а затем проверяет есть ли у переданного объекта свойство с данным именем.
Функция должна возвращать true или false.
*/

function getResult (str, obj){
    alert(str in obj);
}


object1 = {
    book: 'House of Shadows',
    autor: 'Nicola Cornick',
};
let name = 'book';
getResult(name, object1);

// Задание выполнено верно, но функцию можно было сделать проще, т.к. оператор in (str in obj) сразу возвращает результат true или false