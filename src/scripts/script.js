'use strict';

/* toggle menu */
let adaptiveMenu = document.querySelector(".header-mobile__button");
let mobileMenu = document.querySelector(".mobile-menu");
let content = document.querySelector(".content")
let closeModal = document.querySelector(".mobile-menu__close");
adaptiveMenu.addEventListener("click", function (e) {
  e.preventDefault();
  this.classList.toggle("header-mobile__button_active");
  mobileMenu.classList.toggle("mobile-menu_active");
});
closeModal.addEventListener("click", function (e) {
  mobileMenu.classList.toggle("mobile-menu_active");
  adaptiveMenu.classList.toggle("header-mobile__button_active");
})
// категории
let categoriesMenu = document.querySelector(".navigation-wrap__link");
let categories = document.querySelectorAll(".menu-item");
categoriesMenu.addEventListener("click", function (e) {
  e.preventDefault();
  categoriesMenu.classList.toggle("navigation-wrap__link_active")
  categories.forEach(function (item) {
    item.classList.toggle("mobile-hidden");
  })
})
// табы

let tabsBtn = document.querySelectorAll('.project-category');
let tabsItems = document.querySelectorAll('.project-slider');

tabsBtn.forEach(function (item) {
  item.addEventListener('click', function () {
    let currentBtn = item;
    let tabId = currentBtn.getAttribute("data-tab");
    let currentTab = document.querySelector(tabId);
    if (!currentBtn.classList.contains('project-category_active')) {
      tabsBtn.forEach(function (item) {
        item.classList.remove('project-category_active');
      });
      tabsItems.forEach(function (item) {
        item.classList.remove('project-slider_active');
      });
      currentBtn.classList.add('project-category_active');
      currentTab.classList.add('project-slider_active');
    }

  });
});
// document.querySelector(".project-category").click();

// аккордеон
let accordion = document.querySelectorAll('.faq-accordion__item');
accordion.forEach(function (item) {
  item.addEventListener('click', function () {
    if (item.classList.contains('faq-accordion__item_active')) {
      item.classList.remove('faq-accordion__item_active');
    }
    else {
      item.nextElementSibling.classList.remove('faq-accordion__content_active')
      item.classList.toggle('faq-accordion__item_active');
    }
    item.nextElementSibling.classList.toggle('faq-accordion__content_active');
  });
});

// Модалка заказа звонка
let buttonModal = document.querySelectorAll(".open-callback");
let modalCallback = document.querySelector(".modal");
let closeModalCallback = document.querySelector(".modal__close");
buttonModal.forEach(function (item) {
  item.addEventListener("click", function (e) {
    e.preventDefault();
    modalCallback.classList.add("modal_active");
  });
});
//buttonModal.addEventListener("click", function (e) {
//  e.preventDefault();
//  modalCallback.classList.add("modal_active");
//})
closeModalCallback.addEventListener("click", function (e) {
  e.preventDefault();
  modalCallback.classList.remove("modal_active");
})

// слайдеры
const swiper1 = new Swiper('.swiper1-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  grabCursor: true,
  observer: true,
  observeParents: true,
  navigation: {
    nextEl: '#swiperNext1',
    prevEl: '#swiperPrev1',
  },
});

const swiper11 = new Swiper('.swiper11-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  grabCursor: true,
  observer: true,
  observeParents: true,
  navigation: {
    nextEl: '#swiperNext11',
    prevEl: '#swiperPrev11',
  },
});

const swiper12 = new Swiper('.swiper12-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  grabCursor: true,
  observer: true,
  observeParents: true,
  navigation: {
    nextEl: '#swiperNext12',
    prevEl: '#swiperPrev12',
  },
});

const swiper13 = new Swiper('.swiper13-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  grabCursor: true,
  observer: true,
  observeParents: true,
  navigation: {
    nextEl: '#swiperNext13',
    prevEl: '#swiperPrev13',
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
const swiper5 = new Swiper('.command-slider', {
  loop: true,
  slidesPerView: 3,
  // spaceBetween: 28,
  centeredSlides: true,
  slideActiveClass: "command-slide_active",
  loopAdditionalSlides: 30,
  navigation: {
    nextEl: '.command__arrow_next',
    prevEl: '.command__arrow_prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 3
    }
  }
});
const swiper6 = new Swiper(".history-slider", {
  loop: true,
  spaceBetween: 15,
  slidesPerView: 5,
  navigation: {
    nextEl: '.history__arrow_next',
    prevEl: '.history__arrow_prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1
    },
    576: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 3
    },
    992: {
      slidesPerView: 4
    },
    1200: {
      spaceBetween: 15
    }
  }
});