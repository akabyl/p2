const swiper = new Swiper('.seminars__slider', {
	slidesPerView: 1,
	spaceBetween: 30,
	loop: true,
	navigation: {
		nextEl: '.button-next',
		prevEl: '.button-prev',
	},
	pagination: {
		el: '.swiper-pagination',
	},
	breakpoints: {
		769: {
			slidesPerView: 2,
		},
		992: {
			slidesPerView: 3,
			spaceBetween: 30,
		},
		1200: {
			slidesPerView: 2,
			spaceBetween: 40,
		},
		1521: {
			slidesPerView: 3,
		},
	},
});
const specialists = new Swiper('.specialists__slider', {
	slidesPerView: 1,
	spaceBetween: 30,
	loop: true,
	navigation: {
		nextEl: '.specialists-btn-next',
		prevEl: '.specialists-btn-prev',
	},
	pagination: {
		el: '.specialists__pagination',
	},
	breakpoints: {
		767: {
			slidesPerView: 2,
			spaceBetween: 40,
		},
	},
});

// const aboutTopSwiper = new Swiper('.about__swiper', {
// 	slidesPerView: 1,
// 	spaceBetween: 10,
// 	loop: true,
// 	// navigation: {
// 	// 	nextEl: '.specialists-btn-next',
// 	// 	prevEl: '.specialists-btn-prev',
// 	// },
// 	// pagination: {
// 	// 	el: '.specialists__pagination',
// 	// },
// 	// breakpoints: {
// 	// 	767: {
// 	// 		slidesPerView: 2,
// 	// 		spaceBetween: 40,
// 	// 	},
// 	// },
// });

const about = new Swiper('.about__swiper', {
	// Optional parameters
	slidesPerView: 1,
	loop: true,

	pagination: {
		el: '.about-pagination',
	},

	navigation: {
		nextEl: '.about-button-next',
		prevEl: '.about-button-prev',
	},
});

const cases = new Swiper('.cases-swiper', {
	// Optional parameters
	slidesPerView: 1,

	pagination: {
		el: '.cases-pagination',
	},

	navigation: {
		nextEl: '.cases-button-next',
		prevEl: '.cases-button-prev',
	},
});

const seminarsSwiper = new Swiper('.seminars-swiper', {
	// Optional parameters
	slidesPerView: 1,

	pagination: {
		el: '.seminars-slider__pagination',
	},

	navigation: {
		nextEl: '.seminars-slider-next',
		prevEl: '.seminars-slider-prev',
	},
	breakpoints: {
		767: {
			slidesPerView: 2,
			spaceBetween: 30,
		},
	},
});

const rewiewsSwiper = new Swiper('.rewiews-swiper', {
	// Optional parameters
	slidesPerView: 1,
	loop: true,
	pagination: {
		el: '.pagination-rew',
	},

	navigation: {
		nextEl: '.rewiews-slider-next',
		prevEl: '.rewiews-slider-prev',
	},
	breakpoints: {
		767: {
			slidesPerView: 2,
			spaceBetween: 30,
		},
	},
});

document.addEventListener('DOMContentLoaded', function () {
	const menuToggle = document.querySelector('.header__menu');
	const menuCloseBtn = document.querySelector('.menu-close');
	const menu = document.querySelector('.menu');

	// Открыть меню при клике на header__menu
	menuToggle.addEventListener('click', function (event) {
		event.stopPropagation();
		menu.classList.add('menu-active');
	});

	// Закрыть меню при клике на menu-close
	menuCloseBtn.addEventListener('click', function () {
		menu.classList.remove('menu-active');
	});

	// Закрыть меню при клике вне меню, если меню открыто
	document.addEventListener('click', function (event) {
		if (
			!menu.contains(event.target) &&
			event.target !== menuToggle &&
			menu.classList.contains('menu-active')
		) {
			menu.classList.remove('menu-active');
		}
	});
});
