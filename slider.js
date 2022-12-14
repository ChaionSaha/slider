'use strict';

const slides = document.querySelectorAll('.slide');

slides.forEach((slide, index) => {
	slide.style.transform = `translateX(${index * 100}%)`;
});

let curSlide = 0,
	maxSlide = slides.length - 1;

const gotoSlide = (slideNo) => {
	slides.forEach((slide, index) => {
		slide.style.transform = `translateX(${(index - slideNo) * 100}%)`;
	});
};

const nextSlide = () => {
	if (curSlide == maxSlide) curSlide = 0;
	else curSlide++;

	gotoSlide(curSlide);
};

const prevSlide = () => {
	if (curSlide == 0) curSlide = maxSlide;
	else curSlide--;

	gotoSlide(curSlide);
};
