//Прекрасные животные
const animals = ['Кот', 'Рыба', 'Лемур', 'Варан'];
for (x = 0; x < animals.length; x++) {
    animals[x] = animals[x] + ' - прекрасное животное'
};
console.log(animals);


//Генератор лучайных строк
let alfabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
let randomString = '';
let stringLength = 6;
while (randomString.length < stringLength) {
    randomString += alfabet[Math.floor(Math.random() * alfabet.length)];
}
console.log(randomString);


//Хакер спик
let input = 'javascript is awesome';
let output = '';
for (y = 0; y < input.length; y++) {
    if (input[y] === 'a') {
        output += '4'
    } else if (input[y] === 'e') {
        output += '3'
    } else if (input[y] === 'i') {
        output += '1'
    } else if (input[y] === 'o') {
        output += '0'
    } else {
        output += input[y]
    }
}
console.log(output);