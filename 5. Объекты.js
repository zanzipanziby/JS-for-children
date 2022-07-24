//Объекты в JS похожи на массивы, но для доступа к элементам объектов используются строки, а не числа.
//Эти строки называются ключами или свойствами, а элементы, которые им соответствуют - значениями.

//СОЗДАНИЕ ОБЪЕКТОВ
//Пример объекта, где хранятся сведения о трехногой кошке

let cat = {
    'legs': 3,
    'name': 'Harmony',
    'color': 'Gray'
};
//Мы создали объект с тремя парами ключ-значение. !!!Ключ - всегда строковый, значение любого типа!!!

//Ключи без кавычек
/*
    let cat = {
        legs: 3,
        name: 'Harmony',
        color: 'Gray'
    };
    JS знает, что ключи всегда строковые, поэтому можно обходиться без ковычек. Кавычки нужны ключей из нескольких слов.
*/



//ДОСТУП К ЗНАЧЕНИЯМ ВНУТРИ ОБЪЕКТА

//Хранящиеся в объектах значения можно получить с помощью квадратных скобок - так же, как элементы массива.
cat['name'];
//Другой вариант записи, без кавычек.
cat.name; //Такая запись называется точечной нотацией
console.log(cat['name']);
console.log(cat.name);

//Чтобы узнать, какие ключи есть у данного объекта в JS есть команда Object.keys()

let dog = {
    name: 'Ronny',
    age: 6,
    color: 'white'
};
Object.keys(dog);
console.log(Object.keys(dog));

//ДОБАВЛЕНИЕ ЭЛЕМЕНТОВ В ОБЪЕКТ
let frog = {};

frog['legs'] = 4;
frog['name'] = 'Crazy';
frog['color'] = 'green';
console.log(frog);
//Добавление ключей через точку
let monkey = {};
monkey.legs = 4;
monkey.name = 'Frutty';
monkey.color = 'broun';

console.log(monkey);
//Если обратиться к несуществующему объекту JS вернёт undefined.

//МАССИВЫ ОБЪЕКТОВ

let dinosaurs = [
    {name: 'Tiranosaur', color: 'black'},
    {name: 'Stegosaur', color: 'green'},
    {name: 'Plateosaur', color: 'gray'}
];

//Теперь получим данные об отдельном динозавре
console.log(dinosaurs[0]);
console.log(dinosaurs[1]);
console.log(dinosaurs[2]);
//А если нужно узнать значение ключа нужно указать ключ объекта в ещё одних квадратных скобках
console.log(dinosaurs[0]['name']);
//Другой вариант
console.log(dinosaurs[0].name);//!!!Точечную нотацию можно использовать только с объектами, для массивов они не подходят

//Массив друзей

let anna = {name: 'Anna', age: 11, luckyNumbers: [2, 4, 6, 8]};
let dean = {name: 'Dean', age: 22, luckyNumbers: [3, 6, 9, 10]};
let sam = {name: 'Sam', age: 21, luckyNumbers: [4, 7, 8, 11]};
// Мы создали объекты со значениями в виде массивов
let friends = [anna, dean, sam];
//В переменной friends находится массив с тремя объектами. Мы можем получить каждый из них по индексу в массиве.
friends[1];
console.log(friends[1]);
console.log(friends[0].name);
console.log(friends[2].luckyNumbers[3]);

//ЧТО ПОЛЕЗНОГО МОЖНО СДЕЛАТЬ С ОБЪЕКТАМИ
//Учёт долгов
const owedMoney = {};
owedMoney['Джимми'] = 5;
owedMoney['Анна'] = 7;
owedMoney['Джимми'] += 3;
console.log(owedMoney['Джимми']);
console.log(owedMoney);



//Хранение информации о фильмах (объекты в объектах)

const movies = {
    'В поисках Немо': {
        realeaseDate: 2003,
        duration: 100,
        actors: ['Альберт Брукс', 'Эллен Дедженерес', 'Алекс Гоулд'],
        format: 'DVD'
    },
    'Звёздные войны: Эпизод 6 - Возвращение джедая': {
        realeaseDate: 1983,
        duration: 134,
        actors: ['Марк Хэмилл', 'Харрисон Форд','Кэрри Фишер'],
        format: 'DVD'
    },
    'Гарри Поттер и Кубок огня': {
        realeaseDate: 2005,
        duration: 157,
        actors: ['Дэниел Редклифф', 'Эмма Уотсон','Руперт Гринт'],
        format: 'Blu-ray'
    }
};

let nemo = movies['В поисках Немо'];
let starWars = movies['Звёздные войны: Эпизод 6 - Возвращение джедая'];
let harryPotter = movies['Гарри Поттер и Кубок огня'];

console.log(nemo.realeaseDate);
console.log(starWars.format);
console.log(harryPotter.actors[2]);

let cars = {
    realeaseDate: 2006,
    duration: 117,
    actors: ['Оуен Уилсон', 'Бонни Хант','Пол Ньюмен'],
    format: 'Blu-ray'
};
movies['Тачки'] = cars;

console.log(movies);
console.log(Object.keys(movies));

//ЧТО МЫ УЗНАЛИ
//Объекты в JS во многом похожи на массивы и нужны для хранения множества элементов в одном месте. 
//Но есть одно важное отличие - для доступа к элементам объекта используются строки, а элементы массива расположены по числовым индексам
//Поэтому массивы отсортированы по порядку, а объекты - нет.
