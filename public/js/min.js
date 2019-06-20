'use strict'
var cw = document.querySelector('#class');
var hw = document.querySelector('#home');

function showFirstMessage(text) {
	cw.innerHTML += "<div>" + text + "</div>";
};
showFirstMessage("<div>" + "ёжик" + ' пошел на ' + "нахуй" + "</div>");

function retVar() {
	var num = 50;
	return num;
};
var anotherNum = retVar();
console.log(anotherNum);
var calc = (a, b) => a + b;
hw.innerHTML += "<div>" + (calc(3, 4)) + "</div>";

hw.innerHTML += "<div>" + (calc(8, 4)) + "</div>";

console.log(calc(3, 4));
console.log(calc(8, 4));

var str = "test";
hw.innerHTML += "<div>" + str.length + "</div>";
console.log(str.length);
hw.innerHTML += "<div>" + str.toUpperCase() + "</div>";
hw.innerHTML += "<div>" + str.toLowerCase() + "</div>";

var twelwe = "12.2px";
console.log(Math.round(twelwe));

hw.innerHTML += "<div>" + Math.round(twelwe) + "</div>";
console.log(parseInt(twelwe));
hw.innerHTML += "<div>" + parseInt(twelwe) + "</div>";
console.log(parseFloat(twelwe));
hw.innerHTML += "<div>" + parseFloat(twelwe) + "</div>";
// var money = +prompt('Ваш бюджет на месяц?', '999999999'),
// 	time = prompt('Введите дату в формате YYYY-MM-DD', '');

// var appData = {
// 	budget: money,
// 	timeData: time,
// 	expenses: {},
// 	optionalExpenses: {},
// 	income: [],
// 	savings: false
// };

// cw.innerHTML += "<div>бюджет на 1 день " + appData.budget / 30 + "</div>";
// console.log(appData.budget / 30);
// console.log(cw);

// for (var d = 0; d < 2; d++) {
// 	var a = prompt("Введите обязательную статью расходов в этом месяце", ''),
// 		b = prompt("Во сколько обойдется?", '');
// 	if ((typeof (a)) === 'string' && ((typeof (a)) != null && (typeof (b))) != null && a != '' && b != '' && a.length < 50) {
// 		console.log('done');
// 		appData.expenses[a] = b;
// 	} else {

// 	}

// }
// var dd = 0;
// while (dd < 2) {
// 	dd++;
// 	var a = prompt("Введите обязательную статью расходов в этом месяце", ''),
// 		b = prompt("Во сколько обойдется?", '');
// 	if ((typeof (a)) === 'string' && ((typeof (a)) != null && (typeof (b))) != null && a != '' && b != '' && a.length < 50) {
// 		console.log('done');
// 		appData.expenses[a] = b;
// 	} else {

// 	}
// }
// do {
// 	dd++;
// 	var a = prompt("Введите обязательную статью расходов в этом месяце", ''),
// 		b = prompt("Во сколько обойдется?", '');
// 	if ((typeof (a)) === 'string' && ((typeof (a)) != null && (typeof (b))) != null && a != '' && b != '' && a.length < 50) {
// 		console.log('done');
// 		appData.expenses[a] = b;
// 	} else {

// 	}

// }
// while (dd < 2);

// appData.moneyPerDay = appData.budget / 30;
// // alert(appData.budget / 30);
// console.log('енежедельный бюджет: ' + appData.moneyPerDay);
// if (appData.moneyPerDay < 100) {
// 	console.log('Минимальный уровень достатка');
// } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
// 	console.log('средний уровеь достатка');
// } else if (appData.moneyPerDay > 2000) {
// 	console.log('высокий уровень достатка');
// } else {
// 	console.log('произошла ошибка');
// }

// var num = 50;
// // while (num < 55) {
// // 	console.log(num);
// // 	num++;
// // }
// do {
// 	hw.innerHTML += "<div>цикл " + num + "</div>";
// 	num++;
// }
// while (num < 55)

// for (var i = 1; i < 8; i++) {
// 	if (i == 6) {
// 		continue;
// 	}
// 	hw.innerHTML += "<div>цикл for " + i + "</div>";
// }
// var j = 5;

// hw.innerHTML += "<div>Какое будет выведено значение: let x = 5; alert( x++ ); ? " + j + "</div>";
// hw.innerHTML += "<div>Чему равно такое выражение: [ ] + false - null + true ? NaN </div>";
// var y = 1;
// var x = y = 2;
// hw.innerHTML += "<div>Что выведет этот код: let y = 1; let x = y = 2; alert(x); ? " + x + "</div>";
// hw.innerHTML += "<div>Чему равна сумма [ ] + 1 + 2? " + [] + 1 + 2 + "</div>";
// hw.innerHTML += "<div>Что выведет этот код: alert('+ 1 '[0] )? " + "1" [0] + "</div>";
// hw.innerHTML += "<div>Чему равно 2 && 1 && null && 0 && undefined ? " + null + "</div>";
// hw.innerHTML += "<div>Есть ли разница между выражениями? !!( a && b ) и (a && b)? " + ("a" && "b") + "</div>";
// hw.innerHTML += "<div>Есть ли разница между выражениями? !!( a && b ) и (a && b)? " + !!("a" && "b") + "</div>";
// hw.innerHTML += "<div>Что выведет этот код: alert( null || 2 && 3 || 4 ); ?" + null || 2 && 3 || 4 + "</div>";
// var a = [1, 2, 3];
// var b = [1, 2, 3];
// hw.innerHTML += "<div>a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ? " + "false" + "</div>";
// hw.innerHTML += "<div>Что выведет этот код: alert( +'Infinity' ); ? " + Infinity + "</div>";
// hw.innerHTML += "<div>Верно ли сравнение: 'ёжик' > 'яблоко'? " + "false" + "</div>";
// hw.innerHTML += "<div>Чему равно 0 || '' || 2 || undefined || true || falsе ? " + 0 || "" || 2 || undefined || true || false + "</div>";
// $(document).ready(function () {

// });