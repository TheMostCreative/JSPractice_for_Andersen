const slides = document.querySelectorAll('.slider-container .slide'); // get all the slides
const bg = document.querySelector('.bg'); 
const prev = document.getElementById('prev'); 
const next = document.getElementById('next'); 
const intervalTime = 5000; 
const bgActiveTime = 700; 
let sliderInterval; 


const nextSlide = () => {

    bg.classList.add('active');

    setTimeout(() => {

        const active = document.querySelector('.slide.active');
        active.classList.toggle('active');

        if (active.nextElementSibling) {
            active.nextElementSibling.classList.toggle('active');
        } else {
            slides[0].classList.toggle('active');
        }

        setTimeout(() => {
            bg.classList.remove('active');
        }, 200);
    }, bgActiveTime);
};

sliderInterval = setInterval(nextSlide, intervalTime);


const prevSlide = () => {
    bg.classList.add('active');
    setTimeout(() => {
        const active = document.querySelector('.slide.active');
        active.classList.toggle('active');

        
        if (active.previousElementSibling) {
            active.previousElementSibling.classList.toggle('active');
        } else {
            slides[slides.length - 1].classList.toggle('active');
        }

        setTimeout(() => {
            bg.classList.remove('active');
        }, 200);
    }, bgActiveTime);
};

next.addEventListener('click', () => {
    nextSlide();
    clearInterval(sliderInterval);
    sliderInterval = setInterval(nextSlide, intervalTime);
});

prev.addEventListener('click', () => {
    prevSlide();
    clearInterval(sliderInterval);
    sliderInterval = setInterval(nextSlide, intervalTime);
});