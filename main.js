const title = prompt("Как называется ваш проект?");
const screens = prompt('Какие типы экранов нужно разработать?','Простые, Сложные, Интерактивные');
const screenPrice = +prompt("Сколько будет стоить данная работа");
const rollback = Math.ceil(Math.random() * 100);
const adaptive = confirm("Нужен ли адаптив на сайте?");
const service1 = prompt("Какой дополнительный тип услуги нужен?");
const servicePrice1 = +prompt(`Сколько это будет стоить? ${service1}`);
const service2 = prompt("Какой дополнительный тип услуги нужен?");
const servicePrice2 = +prompt(`Сколько это будет стоить? ${service2}`);

const getTitle = function ( getTitleText) {
  getTitleText = title.toLowerCase().split(",")

  if (getTitleText[0] != '') {
    return getTitleText.toLowerCase(0).toString 
  } else {
    return getTitleText[1].toLowerCase(0).toString 
  }
}

console.log(getTitle())

/* первый вариант  решения с сумами
  const getAllServicePrices = function () { 
  const allServicePrices = servicePrice1 + servicePrice2; 
  return allServicePrices; 
} 
console.log(getAllServicePrices()) 
 
function getFullPrice() { 
  const fullPrice = screenPrice + getAllServicePrices(); 
  return fullPrice; 
} 
*/


/* второй вариант решения */
const getAllServicePrices = function (servicePriceItem1, servicePriceItem2) {
  const allServicePrices = servicePriceItem1 + servicePriceItem2;
  return allServicePrices;
}
console.log(getAllServicePrices(servicePrice2, servicePrice1));

function getFullPrice() {
  const fullPrice2 = screenPrice + getAllServicePrices(servicePrice1, servicePrice2);
  return fullPrice2;
}

console.log(getFullPrice())




/*


console.log(Math.ceil(servicePercentPrice));



console.log(screens.length);

const cashAll = `Стоимость верстки экранов${screenPrice} рублей/ долларов/гривен/юани и Стоимость разработки сайта${getFullPrice()} рублей/ долларов/гривен/юани`;

console.log(cashAll);

const screensLowerCase = screens.toLowerCase().split(",");

console.log(screensLowerCase);

console.log(getFullPrice() * (rollback / 100));

if (getFullPrice() >= 30000) {
  console.log("“Даем скидку в 10%”");
} else 
if (getFullPrice() >= 15000 && fullPrice <= 30000) {
  console.log("“Даем скидку в 5%”");
} else 
if (getFullPrice() <= 15000 && fullPrice >= 0) {
  console.log("“Скидка не предусмотрена”");
} else {
  console.log("что-то пошло не так");
}
*/