const ukraine = { 
	tax: 0.195, 
	middleSalary: 1789, 
	vacancies: 11476 
};
const latvia = { 
	tax: 0.25, 
	middleSalary: 1586, 
	vacancies: 3921 
};
const litva = { 
	tax: 0.15, 
	middleSalary: 1509, 
	vacancies: 1114 
};

1//
const getMyTaxes = function(salary) {
    return this.tax * salary
}

2//
const getMiddleTaxes = function() {
    return this.tax * this.middleSalary
}

3//
const getTotalTaxes = function() {
    return getMiddleTaxes.call(this) * this.vacancies
}

4//
const getMySalary = function(country) {
    return (function(){
        const minSalary = 1500;
        const maxSalary = 2000;
        setInterval(() => {
            const salary =  Math.floor(Math.random() * (maxSalary - minSalary + 1)) + minSalary;
            const taxes = +getMyTaxes.call(country, salary).toFixed(2);
            const profit = +(salary - taxes).toFixed(2);
            return console.log({
                salary,
                taxes,
                profit
        })}, 10000)
    }).call(country)
}

getMySalary(ukraine)

