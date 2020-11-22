let theFirstInteger;
do {
    theFirstInteger = Number(prompt(`Введіть перше ціле число`));
} while
    (!Number.isInteger(theFirstInteger));


let theSecondInteger;
do {
    theSecondInteger = Number(prompt(`Введіть друге ціле число`));
} while
    (theFirstInteger >= theSecondInteger || !Number.isInteger(theSecondInteger));


const miss = confirm(`Потрібно пропускати парні числа?`);
let total = 0;
//const не підійде - let
for (let i = theFirstInteger; i <= theSecondInteger; i++) {
   if (miss && i % 2 === 0) {
      continue;
   }
   total += i;
}
console.log(`Результат ${total}`);
console.log(`Перше число ${theFirstInteger}`);
console.log(`Друге число ${theSecondInteger}`);
console.log(`Пропускати парні числа? ${miss}`);
