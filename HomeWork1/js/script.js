const silverPrice = 15.678;
const goldPrice = 90.2345;
const platinumPrice = 123.965;



const maxPrice = Math.max(silverPrice, goldPrice, platinumPrice);
console.log(maxPrice);

const minPrice = Math.min(silverPrice, goldPrice, platinumPrice);
console.log(minPrice);

const sumPrice = (silverPrice + goldPrice + platinumPrice);
console.log(sumPrice);

const truncPrice = Math.trunc(silverPrice) + Math.trunc(goldPrice) + Math.trunc(platinumPrice);
console.log(truncPrice);

const roundPrice = Math.round(sumPrice / 100) * 100;
console.log(roundPrice);

const booleanValue = Math.trunc(sumPrice) % 2 === 0;
console.log(booleanValue);

const customerMoney = 500;
const restСustomerMoney = (customerMoney - sumPrice);
console.log(restСustomerMoney);

const averagePrice = Number((sumPrice / 3).toFixed(2));
console.log(averagePrice);


// Більш складне
const randomDiscount = Math.floor(Math.random() * 100) + 1;
console.log(randomDiscount);

//Виправлено

const atDiscount = Number(sumPrice - (sumPrice / 100) * randomDiscount).toFixed(2);
console.log(atDiscount);

const cost = sumPrice / 2;
const netProfit = Number(cost - (sumPrice / 100) * randomDiscount).toFixed(2);
console.log(netProfit);


const advanced = `  
  Максимальне число: ${maxPrice} 
  Мінімальне число: ${minPrice} 
  Сума вартості товарів: ${sumPrice} 
  Сума вартості товарів (Без копійок): ${truncPrice} 
  Сума вартості товарів (Округлена до сотень): ${roundPrice} 
  Чи є сума парною?: ${booleanValue} 
  Сума решти з ${customerMoney} грн: ${restСustomerMoney} 
  Середнє значення цін: ${averagePrice}
  Знижка: ${randomDiscount} % 
  Сума з врахуванням знижки (З копійками): ${atDiscount} 
  Чистий прибуток: ${netProfit}
  `;
console.log(advanced);