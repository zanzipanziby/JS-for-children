let firstWord = ['голова', 'нога', 'рука', 'спина'];
let secondWord = ['вонючая', 'кислая', 'противная', 'мерзкая'];
let thirdWord = ['собака', 'помойка', 'какашка', 'вонючка'];
let randomFirstWord = firstWord[Math.floor(Math.random(firstWord) * firstWord.length)];
let randomSecondWord = secondWord[Math.floor(Math.random(secondWord) * secondWord.length)];
let randomThirdWord = thirdWord[Math.floor(Math.random(thirdWord) * thirdWord.length)];
let randomWord = 'У тебя ' + randomFirstWord + ' как ' + randomSecondWord + ' ' + randomThirdWord + '!';
console.log(randomWord);
