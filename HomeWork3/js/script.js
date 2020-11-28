//1
const getMaxDigit = function (startNum) {
    let digitArray = String(startNum).split('');
    let answer = 0;
    for (let sDigit of digitArray) {
        if (Number(sDigit) > answer) {
            answer = Number(sDigit)
        };
    };
    return answer;
}

//2
const power = function (base, exponent) {
    let answer = base;
    for (let i = 0; i < exponent - 1; i++) {
        answer = answer * base;
    }
    return answer;
}

//3
const formatName = function (name) {
    return name[0].toUpperCase() + name.slice(1).toLowerCase();
}

//4
const change = function (salary) {
    return salary - (salary / 100 * 19.5);
}

//5
const getRandomNumber = function (firstNum, secondNum) {
    firstNum = Math.ceil(firstNum);
    secondNum = Math.floor(secondNum);
    return Math.floor(Math.random() * (secondNum - firstNum + 1)) + firstNum;
}

//6
const countLetter = function (letter, word) {
    let count = 0;
    for (let i = 0; i < word.length; i++) {
        if (word[i] === letter) {
            count++;
        }
    }
    return count;
}

//7
const convertCurrency = function (firstCurrency) {
    let secondCurrency = '';
    if (firstCurrency.slice(-3).toUpperCase() === 'UAH') {
        secondCurrency = Math.round(parseInt(firstCurrency) / 28 * 100) / 100 + '$';
    }
    else if (firstCurrency.slice(-1) === '$') {
        secondCurrency = parseInt(firstCurrency) * 28 + 'UAH';
    }
    else {
        secondCurrency = 'ERROR'; 
    }
    return secondCurrency
}

//8
const getRandomPassword = function (startNum) {
    startNum = + startNum;
    let answer = '';
    if (startNum === 0) startNum = 8;
    for (let i = 0; i < startNum; i++) {
        answer += Math.floor(Math.random() * 10);
    }
    return answer;
}

//9
const deleteLetters = function (letter, word) {
    const replace = new RegExp(letter, "gi");
    return word.replace(replace, '');
}

console.log(`function1: ${getMaxDigit(prompt("1) Введіть число"))}`);
console.log(`function2: ${power(prompt('2) Введіть основу'), prompt('2) Введіть степінь'))}`);
console.log(`function3: ${formatName(prompt('3) Введіть ім\'я'))}`);
console.log(`function4: ${change(prompt('4) Сума ЗП'))}`);
console.log(`function5: ${getRandomNumber(prompt('5) Перше число'), prompt('5) Друге число'))}`);
console.log(`function6: ${countLetter(prompt('6) Введіть літеру'), prompt('6) Введіть речення'))}`);
console.log(`function7: ${convertCurrency(prompt('7) Введіть суму (формат ЧислоВалюта)'))}`);
console.log(`function8: ${getRandomPassword(prompt('8) Введіть будь-яку кількість цифр'))}`);
console.log(`function9: ${deleteLetters(prompt('9) Введіть одну букву'), prompt('9) Введіть слово'))}`);
