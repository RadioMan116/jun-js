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