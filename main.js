
const  title = 'unknown project';
const  screens ='Простые, Сложные, Интерактивные';
let screenPrice = Math.ceil(Math.random()*70);
const rollback = Math.ceil(Math.random()*100);
const fullPrice = 150;
const adaptive = true;

console.log(typeof title, typeof fullPrice, typeof adaptive );

console.log(screens.length);

const cashAll = `Стоимость верстки экранов  ${screenPrice} рублей/ долларов/гривен/юани и  Стоимость разработки сайта ${fullPrice} рублей/ долларов/гривен/юани`;

console.log(cashAll);

const screensLowerCase = (screens.toLowerCase().split());

console.log(screensLowerCase);

console.log(fullPrice * (rollback/100))