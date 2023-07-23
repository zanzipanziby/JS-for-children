//1. Изощренные дразнилки
let firstRandomWord = ['рот', 'глаз', 'нос'];
let secondRandomWord = ['тупой', 'кривой', 'гипертрофированный', 'имбицильный'];
let thirdRandomWord = ['лапа', 'ухо', 'спина', 'глаз'];
let fourRandomWord = ['жирафа', 'слона', 'коня', 'собаки'];

let firstWord = firstRandomWord[Math.floor(Math.random() * firstRandomWord.length)];
let secondWord = secondRandomWord[Math.floor(Math.random() * secondRandomWord.length)];
let thirdWord = thirdRandomWord[Math.floor(Math.random() * thirdRandomWord.length)];
let fourWord = fourRandomWord[Math.floor(Math.random() * fourRandomWord.length)];

let randomInsult = 'У тебя ' + firstWord + ' ещё более ' + secondWord + ', чем ' + thirdWord + ' у ' + fourWord + '!!!';
let randomInsultString = ['У тебя', firstWord, 'ещё более', secondWord + ',', 'чем', thirdWord, 'у', fourWord + '!!!'].join(' ');

console.log(randomInsultString);
console.log(randomInsult);

//2. Соединение чисел
let numberArr = [3, 2, 1];
console.log(numberArr.join(' больше, чем '));

