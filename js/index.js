// function init() {
//     import('./carousel-top.js')
//     import('./carousel-books.js');
//     import('./header-burger.js');
// }


// const totalPartials = document.querySelectorAll('[hx-trigger="load"], [data-hx-trigger="load"]').length;
// let loadedPartialsCount = 0;

// document.body.addEventListener('htmx:afterOnLoad', () => {
//     loadedPartialsCount++;
//     if (loadedPartialsCount === totalPartials) init();
// });

const menuBtn = document.querySelector('.menu__button');
const menu = document.querySelector('.header__nav');
            
menuBtn.addEventListener('click', function(){
    menuBtn.classList.add('active');
    menu.classList.remove('active');
})