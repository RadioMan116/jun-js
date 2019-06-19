'use strict'
var cw = document.querySelector('#class');
var hw = document.querySelector('#home');
var money = ('Ваш бюджет на месяц?', '999999999'),
	time = ('Введите дату в формате YYYY-MM-DD', '');
var a1 = ("Введите обязательную статью расходов в этом месяце", ''),
	a2 = ("Во сколько обойдется?", ''),
	a3 = ("Введите обязательную статью расходов в этом месяце", ''),
	a4 = ("Во сколько обойдется?", '');

var appData = {
	budget: money,
	timeData: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: false
};
appData.expenses.a1 = a2;
appData.expenses.a3 = a4;
cw.innerHTML += "<div>бюджет на 1 день " + appData.budget / 30 + "</div>";
// console.log(appData.budget / 30);
// console.log(cw);
function showFirstMessage(text) {
	cw.innerHTML += "<div>" + text + "</div>";
};
showFirstMessage("<div>" + "ёжик" + ' пошел на ' + "нахуй" + "</div>");