'use strict';

/* toggle menu */
let adaptiveMenu = document.querySelector(".header-mobile__button");
let mobileMenu = document.querySelector(".mobile-menu");
let content = document.querySelector(".content")
let closeModal = document.querySelector(".mobile-menu__close");
adaptiveMenu.addEventListener("click", function(e){
  e.preventDefault();
  this.classList.toggle("header-mobile__button_active");
  mobileMenu.classList.toggle("mobile-menu_active");
});
closeModal.addEventListener("click", function(e){
  mobileMenu.classList.toggle("mobile-menu_active");
  adaptiveMenu.classList.toggle("header-mobile__button_active");
})
// категории
let categoriesMenu = document.querySelector(".navigation-wrap__link");
let categories = document.querySelectorAll(".menu-item");
categoriesMenu.addEventListener("click", function(e)
{
  e.preventDefault();
  categoriesMenu.classList.toggle("navigation-wrap__link_active")
  categories.forEach(function(item){
    item.classList.toggle("mobile-hidden");
  })
})
// слайдеры
const swiper1 = new Swiper('.swiper1-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  grabCursor: true,
  
  navigation: {
    nextEl: '.project_next',
    prevEl: '.project_prev',
  },
});

const swiper2 = new Swiper('.swiper2-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  grabCursor: true,
  
  navigation: {
    nextEl: '.reviews_next',
    prevEl: '.reviews_prev',
  },
});

const swiper3 = new Swiper('.swiper3-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 3,
  spaceBetween: 30,
  grabCursor: true,
  centeredSlides: true,
  slideActiveClass: "about__slidesas-active",
  
  navigation: {
    nextEl: '.about_prev3',
    prevEl: '.about_next3',
  },
});

const swiper4 = new Swiper('.swiper4-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 5,
  spaceBetween: 20,
  grabCursor: true,
  
 
  
  navigation: {
    nextEl: '.history_prev3',
    prevEl: '.history_next3',
  },
});


