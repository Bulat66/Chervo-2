// SLIDER
let slider = document.getElementsByClassName('slider');
let slides = document.getElementsByClassName('slide');

let step0 = 1;

function moveSlider0(){
  if ( step0 < 4 ) {
      slider[0].style.transform = `translateX(${-100 * step0}%)`; // Исправление ошибки
      step0++;
  } else {
      slider[0].style.transform = `translateX(0)`;
      step0 = 1;
  }
}
let intervalId0 = setInterval(moveSlider0, 2700);

let step1 = 1;
function moveSlider1(){
  if ( step1 < 4 ) {
      slider[1].style.transform = `translateX(${-100 * step1}%)`; // Исправление ошибки
      step1++;
  } else {
      slider[1].style.transform = `translateX(0)`;
      step1 = 1;
  }
}
let intervalId1 = setInterval(moveSlider1, 3500);

let step2 = 1;
function moveSlider2(){
  if ( step2 < 4 ) {
      slider[2].style.transform = `translateX(${-100 * step2}%)`; // Исправление ошибки
      step2++;
  } else {
      slider[2].style.transform = `translateX(0)`;
      step2 = 1;
  }
}
let intervalId2 = setInterval(moveSlider2, 2000);

// SLIDER type-b
let type_B = document.getElementsByClassName('type-b');
let type_B_slide = document.getElementsByClassName('type-b-slide');

let type_B_currentSlide = 0;

function showSlide(n) {
    type_B_slide[type_B_currentSlide].classList.remove('type-b-active-slide');
    type_B_currentSlide = (n + type_B_slide.length) % type_B_slide.length;
    type_B_slide[type_B_currentSlide].classList.add('type-b-active-slide');
}
function nextSlide() {
    showSlide(type_B_currentSlide + 1);
}
let intervalId = setInterval(nextSlide, 5000);

// let currentSlide = 0;

// function showSlide(n) {
//     slides[currentSlide].classList.remove('active-slide');
//     currentSlide = (n + slides.length) % slides.length;
//     slides[currentSlide].classList.add('active-slide');
// }
// function nextSlide() {
//     showSlide(currentSlide + 1);
// }
// let intervalId = setInterval(nextSlide, 5000);

// const images = [
//   "img/type-e-1.jpg",
//   "img/type-e-2.jpg",
//   "img/type-e-3.jpg"
// ]; // Массив с путями к изображениям

// let currentImageIndex = 0;

// let 
// function changeBackground() {
//   document.body.style.backgroundImage = `url(${images[currentImageIndex]})`;
//   currentImageIndex = (currentImageIndex + 1) % images.length; // Переход к следующему изображению
// }