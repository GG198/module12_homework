/* 12.5 Определить иерархию электроприборов. Включить некоторые в розетку.
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

//1. Создаем класс
class ElectricalAppliance {
    constructor(option){
        this.name = option.name;
        this.volt = 220;
        this.breaker = false;
    }

    //Посчитаем потребляемую мощность
    powerConsumption(amp){
        console.log(`Device power consumption is ${amp * this.volt} WATT`)
    }

}

class Pc extends ElectricalAppliance {
    constructor(Divenergy, option){
        super(option);
            this.energy = Divenergy.energy;
    }
    pause(hours){
        return console.log(`Make a pause after ${hours} hours working!`)
    }
}


class HomeAppliances extends ElectricalAppliance{
    constructor(position, option){
        super(option);
            this.setPosition  = position.setPosition;
            this.costPerHour = 0.80
    }


    //расчитаем стоимость потребления электроэнергии за время работы устройства
    get costOfConsumedElectricity(){
        return console.log('Consumed electricity is : $' + (this.costPerHour * this.hours));
    }

    set workingHours(hours){
        this.hours = hours;
        return  console.log(`Turn off the air conditioner after ${hours} hours of operation`);
    }
}

let pc = new Pc({energy: 'Energy saving device!' }, {name: 'Apple MacBook Pro'});
pc.breaker = 'OFF';
console.log(pc);
pc.powerConsumption(0.9);
pc.pause(4);



let airConditioner = new HomeAppliances({setPosition:'On'},{name: 'ML14XC1 Air Conditioner'});
airConditioner.breaker = 'ON';
console.log(airConditioner);
airConditioner.workingHours = 4;
airConditioner.costOfConsumedElectricity;
airConditioner.powerConsumption(1.6);
