//1
getRandomArray = (length, min, max) => {
	const resArr = [];
	for (let i = 0; i < length; i++) {
		resArr.push(Math.floor(Math.random() * max + min));
	}
	return resArr;
}
console.log(`Перша функція: ${getRandomArray(15, 1, 100)}`);



//2
getModa = (...numbers) => {
	let counter = 0;
	let ofterNum = 0;
	let maxCounter = 0;
	numbers.map((number) => {
		counter = numbers.filter((numberToFilter) => {
			return (number === numberToFilter) && (Number.isInteger(numberToFilter));
		}).length;

		if (counter > maxCounter) {
			maxCounter = counter;
			ofterNum = number;
		}
	});
	return ofterNum;
}
console.log(`Друга функція: ${getModa(6, 2, 55, 77, 77, 77, 77, 77, 77, 57, 87, 23, 2, 56, 3, 2)}`);



//3
getAverage = (...numbers) => {
	let intNumberLength = 0;
	const total = numbers.reduce((total, number) => {
		if (Number.isInteger(number)) {
			intNumberLength++;
			return total += number;
		} else {
			return total;
		}
	}, 0);
	const average = total / intNumberLength;
	return average;
};
console.log(`Третя функція: ${getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)}`);



//5
filterEvenNumbers = (...numbers) => {
	const oddNumbers = numbers.filter((number) => (number % 2) !== 0);
	return oddNumbers;
};
console.log(`П'ята функція: ${filterEvenNumbers(1, 2, 3, 4, 5, 6)}`);



//6
countPositiveNumbers = (...numbers) => {
	const positivesNumbersCounter = numbers.reduce((counter, number) => {
		if (number > 0) {
			return counter += 1;
		} else {
			return counter;
		}
	}, 0);
	return positivesNumbersCounter;
};
console.log(`Шоста функція: ${countPositiveNumbers(1, -2, 3, -4, -5, 6)}`);



//7
getDividedByFive = (...numbers) => {
	const numbersThatCanBeDividedToFive = numbers.filter((number) => {
		return number % 5 === 0;
	});
	return numbersThatCanBeDividedToFive;
};
console.log(`Сьома функція: ${getDividedByFive(6, 2, 55, 11, 20, 45, 15, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)}`);
