// Объявление переменных
let a = 1;
const b = 2;
//a++ and ++a - в первом варианте значение будет увеличено на 1, но только после рассчётов
let x = 10;
x = x + 5
//можно записать x += 5
//Строки и объединение строк
let firstString = 'Dima';
let secondString = ' learn JS';

console.log(firstString + secondString);
//Как узнать длину строки?
let veryLongSting = 'Очень длинная строка';
console.log(veryLongSting.length);
//Получение отдельного символа строки
console.log(veryLongSting[0]);
//Получение среза строки
console.log(veryLongSting.slice(0,5));// Последний символ не включается в срез.
//Перевод строки в заглавный или строчный регистр
console.log(veryLongSting.toUpperCase());
console.log(veryLongSting.toLowerCase());



//Задача 1 - привести строку к нормальному виду с первой заглавной буквой
let myMadString = 'эЙ кАк ДеЛа';
let myNormString = myMadString[0].toUpperCase() + myMadString.slice(1).toLowerCase();
console.log(myNormString);

//Булевые значения
let jsIsCool = true;
//Логический операции и операторы 


//&&(и) - используется, чтобы узнать равны ли оба значения true
//Пример
let hadShower = true;//Принял душ - правда
let hadBackpack = false;//Собрал рюкзак - ложь
let goToSchool = hadShower && hadBackpack; //Можно ли идти в школу?
console.log(goToSchool);


// ||(или) - проверяет является ли хотя бы одно значение true
// Пример 
let hasApple = true;
let hasOrange = false;
let myDinner = hasApple || hasOrange;
console.log(myDinner);


// !(не) - оператор, который превращает false в true и наоборот.
// Пример
let isWeekend = true;
let goToWork = !isWeekend;
console.log(goToWork);

//Задача - собираемся на работу.
let isWeekend1 = false;
let hadShower1 = true;
let hasApple1 = true;
let hasOrange1 = false;
let goToMadWork1 = !isWeekend1 && hadShower1 && (hasOrange1 || hasApple1);
console.log(goToMadWork1);

//Сравнение чисел с помощью булевых значений
//Больше, меньше
// Ограничение по росту в автобусе
let heightMan = 155;
let heightMin = 150;
let goToBus = heightMan > heightMin;
console.log(goToBus);
//Так же работает и сравнение >=
//Равно === (сравнение равны ли значения)
//Пример
let myAge = 21;
let mySisterAge = 21;
let usAge = myAge === mySisterAge;
console.log(usAge);
//Двойной знак равенства == означает "практически равно" 
//(5 == '5' - true; 
//0 == false - true; 
//false = 'false' - false)
//НУЖНО БЫТЬ АККУРАТНЫМ 

//Задача "Кинотеатр". Условие: Проходить могут те, кому 12 и больше либо в сопровождении взрослого.
let childAge = 11;
let accompanied = true;

let goToCimema = childAge >= 12 || accompanied;
console.log('Кинотеатр');
console.log(goToCimema);


//undefined and null - undefined - это переменная, которую определили и не задали значение. 
//null используется для заведомо пустых переменных.










