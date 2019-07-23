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
	var swiper = new Swiper('.right .swiper-container', {
		slidesPerView: 1,
		spaceBetween: 0,
		pagination: {
			el: '.right .swiper-pagination'
		},
		navigation: {

			nextEl: '.right .swiper-button-next',
			prevEl: '.right .swiper-button-prev',
		},
	});
	var swiper2 = new Swiper('.work-examples .swiper-container', {
		slidesPerView: 1,
		spaceBetween: 0,
		pagination: {
			el: '.work-examples .swiper-pagination'
		},
		navigation: {

			nextEl: '.work-examples .swiper-button-next',
			prevEl: '.work-examples .swiper-button-prev',
		},
	});

});