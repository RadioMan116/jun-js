'use strict'
// var cw = document.querySelector('#class');
// var hw = document.querySelector('#home');

// function showFirstMessage(text) {
// 	cw.innerHTML += "<div>" + text + "</div>";
// };
// showFirstMessage("<div>" + "ёжик" + ' пошел на ' + "нахуй" + "</div>");

// function retVar() {
// 	var num = 50;
// 	return num;
// };
// var anotherNum = retVar();
// console.log(anotherNum);
// var calc = (a, b) => a + b;
// hw.innerHTML += "<div>" + (calc(3, 4)) + "</div>";

// hw.innerHTML += "<div>" + (calc(8, 4)) + "</div>";

// console.log(calc(3, 4));
// console.log(calc(8, 4));

// var str = "test";
// hw.innerHTML += "<div>" + str.length + "</div>";
// console.log(str.length);
// hw.innerHTML += "<div>" + str.toUpperCase() + "</div>";
// hw.innerHTML += "<div>" + str.toLowerCase() + "</div>";

// var twelwe = "12.2px";
// console.log(Math.round(twelwe));

// hw.innerHTML += "<div>" + Math.round(twelwe) + "</div>";
// console.log(parseInt(twelwe));
// hw.innerHTML += "<div>" + parseInt(twelwe) + "</div>";
// console.log(parseFloat(twelwe));
// hw.innerHTML += "<div>" + parseFloat(twelwe) + "</div>";

// var qeus = prompt('«кто пришел»', '')
// if (qeus == 'Админ') {
// 	var qeus2 = prompt('пароль', '');
// 	if (qeus2 == 'Чёрный Властелин') {
// 		alert('Добро пожаловать!');
// 	} else if (qeus2 != 'Чёрный Властелин') {
// 		alert('Пароль неверен');
// 	} else {
// 		alert('Вход отменён');
// 	}
// } else if (qeus != 'Админ') {
// 	alert('Я вас не знаю');
// } else {
// 	alert('Вход отменён');
// }
// var a = 2,
// 	b = 1 * 2,
// 	result = '';
// (a + b < 4) ? console.log(result = 'Мало'): console.log(result = 'Много');
// console.log(result = (a + b <= 4) ? 'Мало' : 'Много')
// var age = +prompt('Сколько лет?', '');

// if (!age >= 14 || age > 90) {
// 	console.log('ok')
// }
// nextPrime:
// 	for (var age2 = 2; age2 < 10; age2++) {
// 		for (var age3 = 2; age3 < age2; age3++) {
// 			if (age2 % age3 == 0) {
// 				console.log(age2);
// 				continue nextPrime;
// 			}

// 		}

// 	}

var browser = 'Safari';
var browser = 'IE';
var browser = 'Белка';

if (browser == 'IE') {
	console.log('ваш браузер ' + browser);
} else if (browser == 'Chrome' || browser == 'Firefox' || browser == 'Safari' || browser == 'Opera') {
	console.log('Заебатый браузер ' + browser);
} else {
	console.log('я не знаю такой хуйню ' + browser);
}
// (function () {
// 	var a = +prompt('a?', '');
// 	switch (a) {
// 		case 0:
// 			console.log('пиздец уж ' + a);
// 			break;
// 		case 1:
// 			console.log('хотя бы ' + a);
// 			break;

// 		case 2:
// 		case 3:
// 			console.log('сразу скажу ,и это не плохо ' + a);
// 			break;

// 	}
// })();

// function calcD(a, b, c) {
// 	return b * b - 4 * a * c;
// }
// var testCalcD = calcD(-4, 2, 1);
// console.log(testCalcD);


// function checkAge(age) {
// 	return age > 18 ? true : confirm('Родители разрешили?');

// };
// console.log(checkAge(20));
// checkAge(19);

// function min(a, b) {
// 	if (a < b) {
// 		return a
// 	} else {
// 		return b
// 	}

// };
// console.log(min(2, 8));

// function min2(a, b) {
// 	return a < b ? a : b;



// };
// console.log(min2(99, 8));

// function min3(a, b) {
// 	return (a < b) == a || b;



// };
// console.log(min3(77, 8));

// function pow(x, n) {
// 	return Math.pow(x, n);
// };
// console.log(pow(3, 3));

// function pow2(x, n) {
// 	var result = x;
// 	for (var i = 1; i < n; i++) {
// 		result *= x;
// 	}
// 	return result;
// };
// console.log(pow2(3, 3));
function sumTo(n) {
	var sum = 0;
	for (var i = 1; i <= n; i++) {
		sum += i;
	}
	return sum;
}

function sumTo2(n) {
	if (n == 1) return 1;
	return n + sumTo(n - 1);
}

function sumTo3(n) {
	return n * (n + 1) / 2;
}

console.log(sumTo(1990))
console.log(sumTo2(1990))
console.log(sumTo3(1990))

function factorial(n) {
	return (n != 1) ? n * factorial(n - 1) : 1;
}

console.log(factorial(5))

function factorials(n) {
	if (n == 1) return 1;
	return n * factorials(n - 1);
}
console.log(factorials(5))

function fib(n) {
	var a = 1,
		b = 1;
	for (var i = 3; i <= n; i++) {
		var c = a + b;
		a = b;
		b = c;
	}
	return b;
}
console.log(fib(7))

function fib(n) {
	return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}
console.log(fib(7))
console.log(20e-1['toString'](2));
var a99 = null + undefined;
console.log(a99);
document.onclick = function (e) {

	console.log(e.target);

};