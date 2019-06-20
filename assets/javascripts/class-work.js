'use strict'
var cw = document.querySelector('#class');
var hw = document.querySelector('#home');
var money = +prompt('Ваш бюджет на месяц?', '999999999'),
	time = prompt('Введите дату в формате YYYY-MM-DD', '');

var appData = {
	budget: money,
	timeData: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: false
};

// cw.innerHTML += "<div>бюджет на 1 день " + appData.budget / 30 + "</div>";
// console.log(appData.budget / 30);
// console.log(cw);
// function showFirstMessage(text) {
// 	cw.innerHTML += "<div>" + text + "</div>";
// };
// showFirstMessage("<div>" + "ёжик" + ' пошел на ' + "нахуй" + "</div>");

// for (var d = 0; d < 2; d++) {
// 	var a = prompt("Введите обязательную статью расходов в этом месяце", ''),
// 		b = prompt("Во сколько обойдется?", '');
// 	if ((typeof (a)) === 'string' && ((typeof (a)) != null && (typeof (b))) != null && a != '' && b != '' && a.length < 50) {
// 		console.log('done');
// 		appData.expenses[a] = b;
// 	} else {

// 	}

// }
var dd = 0;
while (dd < 2) {
	dd++;
	var a = prompt("Введите обязательную статью расходов в этом месяце", ''),
		b = prompt("Во сколько обойдется?", '');
	if ((typeof (a)) === 'string' && ((typeof (a)) != null && (typeof (b))) != null && a != '' && b != '' && a.length < 50) {
		console.log('done');
		appData.expenses[a] = b;
	} else {

	}
}
do {
	dd++;
	dd++;
	var a = prompt("Введите обязательную статью расходов в этом месяце", ''),
		b = prompt("Во сколько обойдется?", '');
	if ((typeof (a)) === 'string' && ((typeof (a)) != null && (typeof (b))) != null && a != '' && b != '' && a.length < 50) {
		console.log('done');
		appData.expenses[a] = b;
	} else {

	}

}
while (dd < 2);

appData.moneyPerDay = appData.budget / 30;
// alert(appData.budget / 30);
console.log('енежедельный бюджет: ' + appData.moneyPerDay);
if (appData.moneyPerDay < 100) {
	console.log('Минимальный уровень достатка');
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
	console.log('средний уровеь достатка');
} else if (appData.moneyPerDay > 2000) {
	console.log('высокий уровень достатка');
} else {
	console.log('произошла ошибка');
}