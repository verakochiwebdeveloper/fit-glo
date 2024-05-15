const title = prompt("Как называется ваш проект?");
const screens = prompt('Какие типы экранов нужно разработать?','Простые, Сложные, Интерактивные');
const screenPrice = +prompt("Сколько будет стоить данная работа");
const rollback = Math.ceil(Math.random() * 100);
const adaptive = confirm("Нужен ли адаптив на сайте?");
const service1 = prompt("Какой дополнительный тип услуги нужен?");
const servicePrice1 = prompt(`Сколько это будет стоить? ${service1}`);
const service2 = prompt("Какой дополнительный тип услуги нужен?");
const servicePrice2 = prompt(`Сколько это будет стоить? ${service2}`);

const fullPrice =
  Number(screenPrice) + Number(servicePrice1) + Number(servicePrice2);
const servicePercentPrice = fullPrice - rollback;

console.log(fullPrice);
console.log(Math.ceil(servicePercentPrice));

console.log(typeof title, typeof fullPrice, typeof adaptive);

console.log(screens.length);

const cashAll = `Стоимость верстки экранов${screenPrice} рублей/ долларов/гривен/юани и Стоимость разработки сайта${fullPrice} рублей/ долларов/гривен/юани`;

console.log(cashAll);

const screensLowerCase = screens.toLowerCase().split(",");

console.log(screensLowerCase);

console.log(fullPrice * (rollback / 100));

if (fullPrice >= 30000) {
  console.log("“Даем скидку в 10%”");
} else 
if (fullPrice >= 15000 && fullPrice <= 30000) {
  console.log("“Даем скидку в 5%”");
} else 
if (fullPrice <= 15000 && fullPrice >= 0) {
  console.log("“Скидка не предусмотрена”");
} else {
  console.log("что-то пошло не так");
}