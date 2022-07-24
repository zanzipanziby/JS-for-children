let words = ['мама', 'макака', 'дом'];
let randomWord = words[Math.floor(Math.random(words) * words.length)];

let invisibleWord = [];
for (i = 0; i < randomWord.length; i++) {
    invisibleWord[i] = '_';
}

let finalWordLength = randomWord.length;
let guesses = 50;

while (finalWordLength > 0 && guesses > 0) {
    alert(invisibleWord.join(' '));
    let guess = prompt('Угадай букву или нажми Отмена для завершения игры').toLowerCase();
    if (guess === null) {
        break;
    } else if (guess.length !== 1) {
        alert('только одну букву');
    } else {
        guesses--;
        for (j = 0; j < randomWord.length; j++) {
            if (randomWord[j] === guess && invisibleWord[j] === '_') {
                invisibleWord[j] = guess;
                finalWordLength--;
            }
        }

    }

}
alert(invisibleWord.join(' '));
if (guesses > 0) {alert('Отлично, ты выйграл!');}
else {alert('Попытки закончились');}
