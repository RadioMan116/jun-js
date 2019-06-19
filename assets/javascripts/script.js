$(document).ready(function () {
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
	var num = 50;
	// while (num < 55) {
	// 	console.log(num);
	// 	num++;
	// }
	do {
		hw.innerHTML += "<div>цикл " + num + "</div>";
		num++;
	}
	while (num < 55)

	for (var i = 1; i < 8; i++) {
		if (i == 6) {
			continue
		}
		hw.innerHTML += "<div>цикл for " + i + "</div>";
	}
	var j = 5;

	hw.innerHTML += "<div>Какое будет выведено значение: let x = 5; alert( x++ ); ? " + j + "</div>";
	hw.innerHTML += "<div>Чему равно такое выражение: [ ] + false - null + true ? NaN </div>";
	var y = 1;
	var x = y = 2;
	hw.innerHTML += "<div>Что выведет этот код: let y = 1; let x = y = 2; alert(x); ? " + x + "</div>";
	hw.innerHTML += "<div>Чему равна сумма [ ] + 1 + 2? " + [] + 1 + 2 + "</div>";
	hw.innerHTML += "<div>Что выведет этот код: alert('+ 1 '[0] )? " + "1" [0] + "</div>";
	hw.innerHTML += "<div>Чему равно 2 && 1 && null && 0 && undefined ? " + null + "</div>";
	hw.innerHTML += "<div>Есть ли разница между выражениями? !!( a && b ) и (a && b)? " + ("a" && "b") + "</div>";
	hw.innerHTML += "<div>Есть ли разница между выражениями? !!( a && b ) и (a && b)? " + !!("a" && "b") + "</div>";
	hw.innerHTML += "<div>Что выведет этот код: alert( null || 2 && 3 || 4 ); ?" + null || 2 && 3 || 4 + "</div>";
	var a = [1, 2, 3];
	var b = [1, 2, 3];
	hw.innerHTML += "<div>a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ? " + "false" + "</div>";
	hw.innerHTML += "<div>Что выведет этот код: alert( +'Infinity' ); ? " + Infinity + "</div>";
	hw.innerHTML += "<div>Верно ли сравнение: 'ёжик' > 'яблоко'? " + "false" + "</div>";
	hw.innerHTML += "<div>Чему равно 0 || '' || 2 || undefined || true || falsе ? " + 0 || "" || 2 || undefined || true || false + "</div>";
});