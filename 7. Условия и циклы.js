//УСЛОВИЯ И ЦИКЛЫ
//Условные конструкции и циклы - одни из самых важных понятий в JS.
//Условная конструкция представляет собой команду: "Если что-то true, сделай это, иначе это"

//УСЛОВНЫЕ КОНСТРУКЦИИ
//В JS есть два вида услоных конструкций - это if и if...else. Оператор if выполняет фрагмент кода, если условие true.
//А оператор if...else выполняет один фрагмент фрагмент кода, если условие даёт true, и другой фрагмент в противном случае.

//Конструкция if

let myName = 'Dima';
console.log('Hello, ' + myName);
if (myName.length > 3) {
    console.log ('Very long name');
}

//Конструкция if...else

let hisName = 'Dima';
console.log('Hello ' + hisName);
if (hisName.length > 6) {
    console.log('Very long name');
} else {
    console.log('Not long name');
}

//Цепочка из конструкций if...else
let lemonChiken = false;
let beefWithBlackBean = false;
let sweetAndSourPork = false;

if (lemonChiken) {
    console.log('Отлично! Я буду курицу с лемоном.');
} else if (beefWithBlackBean) {
    console.log('Ладно, дайте тогда говядину с бобами.');
} else if (sweetAndSourPork) {
    console.log('Хорошо, несите свинину в кисло-сладком соусе');
} else {
    console.log('Раз так, несите рис!');
}

//Этот код можно прочитать так:
//Если это условие даёт true, выполните код из первого тела
//Иначе, если второе условие даёт true, выполнить второе тело
//Иначе, если третье условие даёт trueб выполнить третье тело
//Иначе, выполнить тело else
//Если не указать else и не одно из условий не даёт true - ничего выполнено не будет.

//ЗАДАЧА
let herName = 'Dima';
if (herName === 'Liza') {
    console.log('Hello ' + herName);
} else if (herName === 'Aleksey') {
    console.log('Hello ' + herName);
} else if (herName === 'Lena') {
    console.log('Hello ' + herName);
}
else {
    console.log('Hello unknow');
}

//ЦИКЛЫ
//Циклы позволяют выполнять фрагмент кода многократно - до тех пор пока условие даёт true.

//Цикл while - самый простой из циклов. Этот цикл выполняет код своего тела, до тех пор, пока задуманное условие не престанет выдовать true.

/*          while (condition) {    // Это условие проверяется при каждом повторе цикла 
             console.log('Делаем что-то');   // Код который будет выполняться пока условие даёт true
             i++;    //Что-то в коде должно влиять на условие, чтобы оно дало false
}
*/

//Считаем овец с помощью цикла while.

let sheepCounted = 0;
while (sheepCounted <= 10) {
    console.log('Посчитано овец ' + sheepCounted + '!');
    sheepCounted++;
}
console.log('Спокойной ночи!')


//Цикл for - оператор for упрощает создание циклов, устроенных следующим образом: сначала создаётся переменная,
//а затем тело цикла повторяется снова и снова до тех пор, пока условия даёт true, причём при каждом повторе значение переменной обновляется.
//Програмируя цикл for, мы создаём переменную, задаём условие, указываем, как должна меняться переменная после каждого повтора, - и лишь затем
//переходим к написанию тела цикла.

//Считаем овец с помощью for

for (let sheepCountedNew = 0; sheepCountedNew < 10; sheepCountedNew++) {
    console.log('Поссчитано ебучих овец ' + sheepCountedNew + '!')
}
console.log('Хррррррр');



/*      
    for (настройка; условие; приращение;) { настройка - код до начала цикла; условие - проверяет true or false; приращение - выполняется после каждого повтора тела цикла
    console.log('Делаем что-то') код, который выполняется пока тело цикла true
    }
*/

let timeToSayHello = 3;
for (let i = 0; i < timeToSayHello; i++) {
    console.log('Hello');
}


//Цикл for, массивы и строки. 
//Часто цикл for используется для перебора элементов массива и символов строк.

const animals = ['лев', 'фламинго', 'медведь', 'удав'];
for (let y = 0; y < animals.length; y++) {
    console.log('В зоопарке есть ' + animals[y] +' и все они пидоры');
}

let nikName = 'Nik';
for (let x = 0; x < nikName.length; x++) {
    console.log('В моём имени есть буква ' + nikName[x]);
}

//Другие варианты применения for
for (let num = 2; num < 10000; num *= 2) {
    console.log(num);
}

//ЗАДАЧА
for (let num1 = 3; num1 < 20000; num1 *= 3) {
    console.log(num1);
}
