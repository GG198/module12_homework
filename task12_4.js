/* 12.4 Определить иерархию электроприборов. Включить некоторые в розетку.
Посчитать потребляемую мощность.
Таких приборов должно быть, как минимум, два (настольная лампа и компьютер).
Выбрав прибор, подумайте, какими свойствами он обладает.
План:
.Определить родительскую функцию с методами, которые включают/выключают
прибор из розетки;
.Создать делегирующую связь [[Prototype]] для двух конкретных приборов;
.У каждого из приборов должны быть собственные свойства и, желательно, методы,
отличные от родительских методов;
.Создать экземпляры каждого прибора;
.Вывести в консоль и посмотреть результаты работы, гордиться собой :)
*/


//1. Создаем функцию-конструктор Электроприборы
function ElectricalAppliance(name){
    this.name = name;
    this.brakerState = true;
}

/* Создаем метод ф-ии ElectricalAppliance, который устанавливает
положение тумблера: вкл/выкл . И выносим метод за рамки ф-ии,
чтобы не грузить память ПК.
*/


ElectricalAppliance.prototype.getBreaker = function (){
    console.log('tumbler position is: ' + this.brakerState);
}

ElectricalAppliance.prototype.getName = function (){
    console.log('\nThe name of device is: ' + this.name);
}

// Устанавливаем ф-ю ElectricalAppliance прототипом для Pc.
//Теперь Pc доступны все методы и свойства родителя: ElectricalAppliance
Pc.prototype = new ElectricalAppliance('Apple MacBook Pro');


//Добавим св-ва и методы ф-ии конструктор
function Pc (energy){
    this.energy = energy;
}

//Выносим метод за рамки функции.Создание метода ф-ии через prototype улучшает
//быстродействи ПС, т.к. при вызове ф-ии интерпретатор берет ее по одной ссылке.
Pc.prototype.pause = function(hours){
    console.log(`Make a pause after ${hours} hours working!`);
}

//Создаем объект от Рс и передаем туда свойство: energy
let mac = new Pc('Energy saving device!');

//Устанавливаем включатель в позиции 'On' и выводим все значения объекта в консоль.
mac.getName();
mac.brakerState = 'ON';
mac.getBreaker();
console.log(`Mac is ${mac.energy}`);
mac.pause(4);


//Create a homeAppliances function-constructor.По аналогии с первым объетом
HomeAppliances.prototype = new ElectricalAppliance('Air conditioning');
function HomeAppliances (setOn){
    this.setOn = setOn
}

HomeAppliances.prototype.workingHours = function (hours){
    console.log(`Turn off the air conditioner after ${hours} hours of operation`);
}

let airConditioner = new HomeAppliances (4);
airConditioner.getName();
airConditioner.brakerState = 'OFF';
console.log ('The Air conditioner starts working at ' + airConditioner.setOn + ' am');
airConditioner.workingHours(18);
airConditioner.getBreaker();
