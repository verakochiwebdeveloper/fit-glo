let appData = {
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

  getTitle: function(titletext) {
    let getTitletrim = titletext.trim();
    const firstLetter = getTitletrim.charAt(0).toUpperCase();
    const restOfTitle = getTitletrim.slice(1).toLowerCase();
    return firstLetter + restOfTitle;
  },

  getAllServicePrices: function(price1, price2) {
    while (true) {
      if (isNaN(price1) || price1 === "" || price1 === null) {
        price1 = parseFloat(price1);
        break;
      } else {
        alert("Пожалуйста, введите число.");
      }
    }
    while (true) {
      if (isNaN(price2) || price2 === "" || price2 === null) {
        price2 = parseFloat(price2);
        break;
      } else {
        alert("Пожалуйста, введите число.");
      }
    }
    return price1 + price2;
  },

  getFullPrice: function(price1, price2) {
    return price1 + price2;
  },

  isNumber: function(num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
  },

  getRollbackMessage: function(fullPrice) {
    if (fullPrice >= 30000) {
      return "Даем скидку в 10%";
    } else if (fullPrice >= 15000) {
      return "Даем скидку в 5%";
    } else if (fullPrice >= 0) {
      return "Скидка не предусмотрена";
    } else {
      return "что-то пошло не так";
    }
  },

  start: function() {
    this.title = prompt("Как называется ваш проект?");
    this.screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные");

    do {
      this.screenPrice = prompt("Сколько будет стоить данная работа?");
    } while (this.isNumber(this.screenPrice));

    this.adaptive = prompt("Нужен ли адаптив на сайте?");

    const servicePrices = this.getAllServicePrices(servicePrice1, servicePrice2);

    this.fullPrice = this.getFullPrice(this.screenPrice, servicePrices);

    this.servicePercentPrice = this.fullPrice - this.rollback;

    this.logger();
  },

  logger: function() {
    for (let key in this) {
      console.log(key + ": " + this[key]);
    }
  }
};

appData.start();
