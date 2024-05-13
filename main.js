const title = prompt("Как называется ваш проект");
const screens = prompt(
  'Какие типы экранов нужно разработать(пример: "Простые, Сложные, Интерактивные")'
);
const screenPrice = +prompt(
  "Сколько будет стоить данная работа(пример: 12000)"
);
const rollback = Math.ceil(Math.random() * 100);
const adaptive = confirm("Нужен ли адаптив на сайте");
const service1 = prompt("Какой дополнительный тип услуги нужен?");
const servicePrice1 = prompt(`Сколько это будет стоить? ${service1}`);
const service2 = prompt("Какой дополнительный тип услуги нужен?");
const servicePrice2 = prompt(`Сколько это будет стоить? ${service2}`);
const agentBonus = 5000;
const fullPrice =
  Number(screenPrice) + Number(servicePrice1) + Number(servicePrice2);
const servicePercentPrice = Number(fullPrice) - agentBonus;

console.log(fullPrice);
console.log(Math.floor(servicePercentPrice));

console.log(typeof title, typeof fullPrice, typeof adaptive);

console.log(screens.length);

const cashAll = `Стоимость верстки экранов  ${screenPrice} рублей/ долларов/гривен/юани и  Стоимость разработки сайта ${fullPrice} рублей/ долларов/гривен/юани`;

console.log(cashAll);

const screensLowerCase = screens.toLowerCase().split(",");

console.log(screensLowerCase);

console.log(fullPrice * (rollback / 100));

switch (true) {
  case fullPrice > 30000:
    console.log('“Даем скидку в 10%”');
    break;

  case fullPrice >= 15000 && fullPrice <= 30000:
    console.log("“Даем скидку в 5%”");
    break;

    case fullPrice <= 15000 && fullPrice > 0:
    console.log('“Даем скидку в 5%”');
    break;

    case fullPrice == 0:
    console.log('“Скидка не предусмотрена”');
    break;

    default:
    console.log('что-то пошло не так');
}
