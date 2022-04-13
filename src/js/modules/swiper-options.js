new Swiper('.swiper', {
	slidesPerView: 1,
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true,
	},
	edgeSwipeDetection: 'true'
});

new Swiper('.blog-swiper', {
	loop: true,
	slidesPerView: 1,
	pagination: {
		el: '.blog-swiper-pagination',
		type: 'bullets',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});

new Swiper('.quotes-swiper', {
	loop: true,
	slidesPerView: 'auto',
	pagination: {
		el: '.quotes-swiper-pagination',
		type: 'bullets',
		clickable: true,
	},
});
