$(document).ready(function () {
	var qAll = document.querySelectorAll('div'),
		dId = document.getElementById('main'),
		TagName = document.getElementsByTagName('h1'),
		ClassName = document.getElementsByClassName('main');

	const cros = {
		name: 'Nike',
		prise: 1000,
		count: 3
	};

	// arr.forEach(function (element) {
	// 	console.log(element);
	// });
	// arr.forEach(function (propName, index) {
	// 	console.log(arr[index]);
	// 	console.log(cros[propName]);
	// });
	Object.keys(cros).forEach(function (key) {
		console.log(key, cros[key]);
	});

	// console.log(cros);

	// console.log(qAll);
	// console.log(dId);
	// console.log(TagName);
	// console.log(ClassName);

});