var MainMenuButton = document.querySelector('.menu-button'),
   // SubMenuButton = document.querySelector('.sub-menu-button'),
   MainMenu = document.querySelector('.menu'),
   // SubMenu = document.querySelector('.sub-menu'),
   MenuButtonLine = document.querySelector('.menu-button_line');

MainMenuButton.addEventListener('click', () => {
   MainMenu.classList.toggle('main-menu_active');
   MainMenuButton.classList.toggle('main-menu_active');
});
document.addEventListener('scroll', () => {
   MainMenu.classList.remove('main-menu_active');
   MainMenuButton.classList.remove('main-menu_active');
});
const heroSwiper = new Swiper('.hero-swiper', {
   // Optional parameters
   loop: false,
   autoHeight: false,
   spaceBetween: 70,
   slidesPerView: 1,
   direction: 'vertical',
   autoplay: {
      delay: 2000,
   },
   pagination: {
      el: '.swiper-pagination',
      type: 'fraction'
   },
   scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
   },
});

const swiper = new Swiper('.reviews-swiper', {
   loop: false,
   spaceBetween: 30,
   slidesPerView: 3,
   slidesPerGroup: 1,
   autoplay: {
      delay: 2000,
   },
   pagination: {
      el: '.swiper-pagination',
      type: 'fraction'
   },
   scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
   },
});