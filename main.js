// 1) Следующим переменным присвоить значения
const  title = 'unknown project';
const  screens ='Простые, Сложные, Интерактивные';
const screenPrice = Math.ceil(Math.random()*70);
const rollback = Math.ceil(Math.random()*100);
const fullPrice = 150;
const adaptive = true;


// 2) Используя методы и свойства:

//Вывести в консоль тип данных значений переменных title, fullPrice, adaptive;

console.log(typeof title, typeof fullPrice, typeof adaptive );

//Вывести в консоль длину строки из переменной screens

console.log(screens.length);

// Вывести в консоль “Стоимость верстки экранов (screenPrice) рублей/ долларов/гривен/юани” и “Стоимость разработки сайта (fullPrice) рублей/ долларов/гривен/юани”

console.log('Стоимость верстки экранов ' + screenPrice +' рублей/ долларов/гривен/юани и ' + ' Стоимость разработки сайта' + fullPrice + 'рублей/ долларов/гривен/юани')

// Привести строку screens к нижнему регистру и разбить строку на массив, вывести массив в консоль

const screensLowerCase = (screens.toLowerCase());

console.log(screensLowerCase);

screensArray = screensLowerCase.split();

console.log(screensArray);

// Хотелось бы конечно в одну строку это все объеденить "screesArray = screensLowerCase.split(screens.toLowerCase())"

//Вывести в консоль Процент отката посреднику за работу (fullPrice * (rollback/100))

console.log(fullPrice * (rollback/100))