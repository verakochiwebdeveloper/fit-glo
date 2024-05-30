/*let title = prompt("Как называется ваш проект?");
const screens = prompt(
  "Какие типы экранов нужно разработать?",
  "Простые, Сложные, Интерактивные"
);
let screenPrice;
const rollback = Math.ceil(Math.random() * 100);
let adaptive;
const service1 = prompt("Какой дополнительный тип услуги нужен?");
const servicePrice1 = +prompt(`Сколько это будет стоить? ${service1}`);
const service2 = prompt("Какой дополнительный тип услуги нужен?");
const servicePrice2 = +prompt(`Сколько это будет стоить? ${service2}`);

const getTitle = function (titletext) {
  let getTitletrim = titletext.trim();
  const firstLetter = getTitletrim.charAt(0).toUpperCase();
  const restOfTitle = getTitletrim.slice(1).toLowerCase();
  return firstLetter + restOfTitle;
};

title = getTitle(title);
*/
let  appData = {
  title: '',
  screens: '',
 screenPrice: 0,
 adaptive: true,
  rollback: Math.ceil(Math.random() * 100),
  AllServicePrices: 0,
  fullPrice: 0,
  servicePercentPrice: 0,
 service1: '',
 service2: '',
 

}

let start = {
  asking: functtion () {
    appData.title = prompt("Как называется ваш проект?")
    appData.screens = prompt("Какие типы экранов нужно разработать?","Простые, Сложные, Интерактивные"),
  
    do {
      appdata.screenPrice = prompt( "Сколько будет стоить данная работа?")
    } while(isNumber(appData.screenPrice))
  
      appData.adaptive("Нужен, ли адаптив на сайте")
   }

   getAllServicePrices: function getAllServicePrices (price1, price2) {
    while (true) {
      if (isNaN(price1) || price1 === "" || price1 === null) {
        price1 = parseFloat(price1);
        break;
      } else {
        alert("Пожалуйста, введите число.");
      }
      while (true)
        if (isNaN(price2) || price2 === "" || price2 === null) {
          price2 = parseFloat(price2);
          break;
        } else {
          alert("Пожалуйста, введите число.");
        }
      return price1 + price2;
    }
  }

  getFullPrice: function getFullPrice(price1, price2) {
    return price1 + price2;
  }
   isNumber: function isNumber(num) {
    return !isNaN(parseFloat(num)) && isFinite(num)
  }

  getRollbackMessage: function getRollbackMessage (fullPrice) {
    if (fullPrice >= 30000) {
      return "Даем скидку в 10%";
    } else if (fullPrice >= 15000) {
      return "Даем скидку в 5%";
    } else if (fullPrice >= 0) {
      return "Скидка не предусмотрена";
    } else {
      return "что-то пошло не так";
    }
  }
}





const isNumber = function(num) {
  return !isNaN(parseFloat(num)) && isFinite(num)
}



const servicePrices = getAllServicePrices(servicePrice1, servicePrice2);



let fullPrice = getFullPrice(screenPrice, servicePrices);




const getServicePercentPrices = function (price1, price2) {
  return price1 - price2;
};

const servicePercentPrice = getServicePercentPrices(fullPrice, rollback);







const cashAll = `Стоимость верстки экранов ${screenPrice} рублей/ долларов/гривен/юани и Стоимость разработки сайта ${fullPrice} рублей/ долларов/гривен/юани`;

console.log(cashAll);
