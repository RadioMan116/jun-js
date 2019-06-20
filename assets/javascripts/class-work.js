'use strict'
var cw = document.querySelector('#class');
var hw = document.querySelector('#home');

function showFirstMessage(text) {
	cw.innerHTML += "<div>" + text + "</div>";
};
showFirstMessage("<div>" + "ёжик" + ' пошел на ' + "нахуй" + "</div>");