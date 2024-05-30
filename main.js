const appData = {
  title: "",
  screens: "",
  screenPrice: 0,
  adaptive: true,
  rollback: Math.ceil(Math.random() * 100),
  AllServicePrices: 0,
  fullPrice: 0,
  servicePercentPrice: 0,
  service1: "",
  service2: "",

  getTitle: function (titletext) {
    let getTitletrim = titletext.trim();
    const firstLetter = getTitletrim.charAt(0).toUpperCase();
    const restOfTitle = getTitletrim.slice(1).toLowerCase();
    return firstLetter + restOfTitle;
  },

  getAllServicePrices: function (price1, price2) {
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

  getFullPrice: function (price1, price2) {
    return price1 + price2;
  },

  isNumber: function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
  },

  getRollbackMessage: function (fullPrice) {
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

  start: function () {
    do {
      this.title = prompt("Как называется ваш проект?");
    } while (!isNaN(parseFloat(this.title)));

    do {
      this.screens = prompt(
        "Какие типы экранов нужно разработать?",
        "Простые, Сложные, Интерактивные"
      );
    } while (!isNaN(parseFloat(this.screens)));

    do {
      this.screenPrice = prompt("Сколько будет стоить данная работа?");
    } while (
      isNaN(this.screenPrice) ||
      this.screenPrice === "" ||
      this.screenPrice === null
    );

    do {
      this.service1 = prompt("Какой дополнительный тип услуги нужен?");
    } while (!isNaN(parseFloat(this.service1)));

    do {
      this.servicePrice1 = prompt("Сколько это будет стоить?");
    } while (
      isNaN(this.servicePrice1) ||
      this.servicePrice1 === "" ||
      this.servicePrice1 === null
    );

    const servicePrices = this.getAllServicePrices(
      parseFloat(this.screenPrice),
      parseFloat(this.servicePrice1)
    );

    this.fullPrice = this.getFullPrice(
      parseFloat(this.screenPrice),
      servicePrices
    );

    this.servicePercentPrice = this.fullPrice - this.rollback;

    this.logger();
  },
};

appData.start();
