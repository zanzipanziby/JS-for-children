//Массив - это список, где храняться другие значения.
let myTopDino = ['Тиранозавр', 'Стегозавр', 'Велоцераптор'];
//для создания массива используется []

//Доступ к элементам массива 
console.log(myTopDino[0]);

//Создание и измениение элементов массива
myTopDino[0] = 'Тиранозавр Рекс';
console.log(myTopDino[0]);

myTopDino[3] = 'Диплодок';
console.log(myTopDino);

//Разные типы данных в одном массиве
let myMadMassive = [1, 'string', ['first', 'second', 'third']];
console.log(myMadMassive[2]);
console.log(myMadMassive[2][0]);

//Длина массива
let maniacs = ['Yakko', 'Vakko', 'Dot'];
console.log(maniacs.length);
// !!! Полезно !!! - последний индекс массива всегда на 1 меньше его длины.
console.log(maniacs[maniacs.length - 1]); // Простой способ получить последний элемент массива




//ДОБАВЛЕНИЕ ЭЛЕМЕНТОВ В МАССИВ
//Чтобы добавить элемент в конец массива можно воспользоваться методом .push()

let animals = [];
animals.push('Cat');
animals.push('Dog');
animals.push('Fish');
console.log(animals);
console.log(animals.length);

//Чтобы добавить элемент в начало массива используется метод .unshift()

animals.unshift('Monkey');
console.log(animals);

//Чтобы убрать элемент из конца массива нужно добавить метод .pop() (он убирает элемент из конца массива и возвращает этот элемент в виде значения)

let lastAnimals = animals.pop();
console.log(lastAnimals);
console.log(animals);
animals.unshift(lastAnimals);
console.log(animals);
//Чтобы удалить первый элемент из массива и вернуть его значение используется метод .shift()

console.log(animals);
let firstAnimal = animals.shift();
console.log(animals);
animals.unshift(firstAnimal);
console.log(animals);
//Методы unshift and shift добавляют и удоляют элементы с начала массива - так же как push and pop добавляют и удоляют элементы с конца.




//ОБЪЕДИНЕНИЕ МАССИВОВ
//Чтобы склеить два массива, создав таким образом новый используется команда firstArray.concat(otherArray). Метод concat создаст массив, в котором элементы
//из firstArray будут разположены перед otherArray.

let furryAnimals = ['Альпака', 'Лемур' , 'Йети'];
let scalyAnimals = ['Удав', 'Годзила', 'Хамелеон'];
let furryAndScalyAnimals = furryAnimals.concat(scalyAnimals);
console.log(furryAndScalyAnimals);
//Создался новый массив объеденивший элементы двух предыдущих, но два прежних массива не изменились!

//С помощью .concat можно объеденить больше чем два массива
let featheredAnimals = ['Ара', 'Додо'];
let allAnimals = furryAnimals.concat(scalyAnimals, featheredAnimals);
console.log(allAnimals);



//ПОИСК ИНДЕКСА ЭЛЕМЕНТА В МАССИВЕ
//Чтобы выяснить, какой у определенного элемента индекс вмассиве используется метод .indexOf('элемент');

let colors = ['red', 'green', 'yellow'];
console.log(colors.indexOf('green'));
console.log(colors.indexOf('black')); //Если элемента нет в массиве JS вернёт -1

//ПРЕВРАЩАЕМ МАССИВ В СТРОКУ
//Воспользовавшись методом .join(), можно соединить все эллементы в одну большую строку

let boringAnimals = ['Мартышка', 'Кот', 'Рыба', 'Ящерица'];
console.log(boringAnimals.join());
//Для того чтобы чтобы заменить разделитель с запятой на что-то другое нужно в скобках указать "разделитель" - .join('разделитель')
console.log(boringAnimals.join(' * '));
console.log(boringAnimals.join('-'));
console.log(boringAnimals.join(' '));

//ПОИСК ДОРОГИ ДОМОЙ - ЗАДАЧА
let landmarks = [];
landmarks.push('Мой дом');
landmarks.push('Дорожка к дому');
landmarks.push('Мигающий фонарь');
landmarks.push('Протекающий гидрант');
landmarks.push('Пожарная станция');
landmarks.push('Приют для кошек');
landmarks.push('Моя бывшая школа');
landmarks.push('Дома подруги');

console.log(landmarks.pop());
console.log(landmarks.pop());
console.log(landmarks.pop());
console.log(landmarks.pop());
console.log(landmarks.pop());
console.log(landmarks.pop());
console.log(landmarks.pop());
console.log(landmarks.pop());

//СЛУЧАЙНЫЙ ВЫБОР
//Случайные числа можно генерировать с помощью метода Math.random(), который возврощает случайное число от 0 до 1

console.log(Math.random() * 10);

//Округление с помощью Math.floor()
//Все эти случайные числа нельзя использовать как индексы в массиве, поскольку индексы должны быть целым числом.
//Чтобы округлить до ближайшего снизу целого числа используем метод Math.floor()
//Чтобы получить случайный индекс нужно уможить Math.random() на длину массива, а затем округлить значение Math.floor()

console.log(Math.floor(Math.random() * 4));

//Практика
let randomWords = ['Взрыв', 'Пещера', 'Принцесса', 'Карандаш'];
console.log(randomWords[Math.floor(Math.random() * 4)]);


//Программа случайного выбора вариантов
let phrases = [
    'Звучит неплохо',
    'Да, это определенно надо сделать',
    'Не думаю, что это хорошая идея',
    'Может, не сегодня',
    'Компьютер говорит - "НЕТ"'
];
console.log(phrases[Math.floor(Math.random() * 5)]);

//Генератор случайных дразнилок

//Создаём массивы со словами из которых будем составлять дразнилку
let firstRandomWord = ['глаз', 'нос', 'рот'];
let secondRandomWord = ['вонючая', 'унылая', 'дурацкая'];
let thirdRandomWord = ['муха', 'выдра', 'крыса'];
//Создаём переменные для рассчёта случайного индекса массива 
let firstWord = firstRandomWord[Math.floor(Math.random() * firstRandomWord.length)];
let secondWord = secondRandomWord[Math.floor(Math.random() * secondRandomWord.length)];
let thirdWord = thirdRandomWord[Math.floor(Math.random() * thirdRandomWord.length)];
//Создаём переменную для вывода дразнилки
let randomInsult = 'У тебя ' + firstWord + ' выглядит как ' + secondWord + ' ' + thirdWord;
//Просматриваем результат в консоли
console.log(randomInsult);

//ЧТО МЫ УЗНАЛИ?
//Массивы предназначены для хранения списка значений. Массивы JS - один из способов хранения множества значений в одном месте.













