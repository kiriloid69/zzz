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
   // direction: 'vertical',
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
   breakpoints: {
      // when window width is >= 320px
      320: {
         // direction: 'horisontal',
      },
      // when window width is >= 480px
      780: {
         // direction: 'vertical',
      },
   },
});

const swiper = new Swiper('.reviews-swiper', {
   loop: false,
   spaceBetween: 30,
   slidesPerView: 3,
   slidesPerGroup: 1,
   // autoplay: {
   //    delay: 2000,
   // },
   pagination: {
      el: '.swiper-pagination',
      type: 'fraction'
   },
   scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
   },

   breakpoints: {
      // when window width is >= 320px
      320: {
         slidesPerView: 1,
         spaceBetween: 20
      },
      // when window width is >= 480px
      560: {
         slidesPerView: 2,
         spaceBetween: 30
      },
      // when window width is >= 640px
      1000: {
         slidesPerView: 3,
         // spaceBetween: 40
      }
   },
});