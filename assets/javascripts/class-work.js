'use strict'
var cw = document.querySelector('#class');
var hw = document.querySelector('#home');
var money = ('¬аш бюджет на мес€ц?', '999999999'),
	time = ('¬ведите дату в формате YYYY-MM-DD', '');
var a1 = ("¬ведите об€зательную статью расходов в этом мес€це", ''),
	a2 = ("¬о сколько обойдетс€?", ''),
	a3 = ("¬ведите об€зательную статью расходов в этом мес€це", ''),
	a4 = ("¬о сколько обойдетс€?", '');

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
showFirstMessage("<div>" + "Єжик" + ' пошел на ' + "нахуй" + "</div>");
$(document).ready(function () {

});