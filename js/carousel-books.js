// export function initSwipers() {
//     const swiperContainers = document.querySelectorAll('.swiper-container');

//     swiperContainers.forEach((container) => {
//         if (!container.swiper) {
//             const swiper = new Swiper(container, {
//                 slidesPerView: 1,
//                 spaceBetween: 30,
//                 navigation: {
//                     nextEl: container.querySelector('.new-title__button-next'),
//                     prevEl: container.querySelector('.new-title__button-prev'),
//                 },
//                 breakpoints: {
//                     480: {
//                         slidesPerView: 1,
//                     },
//                     768: {
//                         slidesPerView: 2,
//                     },
//                     1024: {
//                         slidesPerView: 3,
//                     },
//                     1280: {
//                         slidesPerView: 4,
//                     },
//                 },
//                 loop: true,
//                 grabCursor: true,
//             });

//             container.swiper = swiper;
//         }
//     });
// }