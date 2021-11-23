const slides = document.querySelectorAll('.slider__item');
const prevSlide = document.querySelector('.slider__arrow_prev');
const nextSlide = document.querySelector('.slider__arrow_next');

let slideNum = 0;

nextSlide.onclick = function() {
    slideNum++;
    for (let slide of Array.from(slides)) {
        slide.className = 'slider__item';
    }
    if (slideNum >= slides.length) {
        slideNum = 0;
    }
    slides[slideNum].className = 'slider__item slider__item_active';
};

prevSlide.onclick = function() {
    slideNum--;
    for (let slide of Array.from(slides)) {
        slide.className = 'slider__item';
    }
    if (slideNum < 0) {
        slideNum = slides.length - 1;
    }
    slides[slideNum].className = 'slider__item slider__item_active';
};