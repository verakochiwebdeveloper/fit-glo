let title = prompt("Как называется ваш проект?");
const screens = prompt('Какие типы экранов нужно разработать?','Простые, Сложные, Интерактивные');
const screenPrice = +prompt("Сколько будет стоить данная работа");
const rollback = Math.ceil(Math.random() * 100);
const adaptive = confirm("Нужен ли адаптив на сайте?");
const service1 = prompt("Какой дополнительный тип услуги нужен?");
const servicePrice1 = +prompt(`Сколько это будет стоить? ${service1}`);
const service2 = prompt("Какой дополнительный тип услуги нужен?");
const servicePrice2 = +prompt(`Сколько это будет стоить? ${service2}`);

const getTitle = function (titletext) {
  let getTitletrim = titletext.trim();
  const firstLetter = getTitletrim.charAt(0).toUpperCase();
  const restOfTitle = getTitletrim.slice(1).toLowerCase()
  return firstLetter + restOfTitle;
};

title = getTitle(title);



const getAllServicePrices = function (price1, price2) {
  return price1 + price2;
}
const servicePrices = getAllServicePrices(price1, price2);

function getFullPrice() {
  const fullPrice = screenPrice + getAllServicePrices(price1, price2);
  return fullPrice;
}

console.log(getFullPrice())

const showTypeOf =  function(variable) {
  return (variable, typeof variable)

}

console.log(showTypeOf(title));
console.log(showTypeOf(screenPrice));
console.log(showTypeOf(adaptive));

const getServicePercentPrices = function () {
  const servicePercentPrice = getFullPrice() - rollback;
  return servicePercentPrice; 
}



 function getRollbackMessage () {
  if (getFullPrice() >= 30000) {
    return "Даем скидку в 10%"
  } else {}
  if (getFullPrice() >= 15000 && fullPrice <= 30000) {
    return "Даем скидку в 5%"
  } else 
  if (getFullPrice() <= 15000 && fullPrice >= 0) {
    return "Скидка не предусмотрена"
  } else {
    return "что-то пошло не так"
  }
 }


 const cashAll = `Стоимость верстки экранов ${screenPrice} рублей/ долларов/гривен/юани и Стоимость разработки сайта ${getFullPrice} рублей/ долларов/гривен/юани`;

console.log(cashAll);