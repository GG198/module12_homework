// 12.3 Написать, функцию, которая принимает в качестве аргумента объект
// и выводит в консоль все ключи и значения только собственных свойств.
// Данная функция не должна возвращать значение.

// 1.Создим объект, который станет прототипом для созданного ниже объекта.

let protoObj = {
    book:'Дверь в лето',

}

// Создадим объект с прототипом. Ф-я Object.create(protoObj)- принимает объект
// protoObj как аргумент и записывает его в прототип для объекта

let library = Object.create(protoObj);
library.authors = 'Роберт Хайнлайн';

function getData(){
    for (let key in library){
        if (library.hasOwnProperty(key)){
            console.log('key: ' + key + '  Value: ' + library[key]);
        }
    }
}
getData(library);