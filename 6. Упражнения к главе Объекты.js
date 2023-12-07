
//УПРАЖНЕНИЯ К ГЛАВЕ ОБЪЕКТЫ
//Подсчет очков

const scores = {
    anna: 5,
    dean: 7,
    sam: 8
};
scores.anna += 5;
scores.dean += 3;
scores.sam += 2;
console.log(scores);

//Вглубь объектов и массивов
const myCrazyObject = {
    'name': 'Нелепый объект',
    'some array': [7, 9, {purpose: 'путаница', number: 123}, 3.3],
    'random animal': 'banana shark'
}
console.log(myCrazyObject['some array'][2].number);

