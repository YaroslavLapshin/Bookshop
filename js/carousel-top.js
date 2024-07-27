let slideIndex = 1;
showSlides(slideIndex);

function changeSlide(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.querySelector(".carousel-top__slides");
    let slideItems = document.querySelectorAll(".carousel-top__slide");
    let dots = document.querySelectorAll(".carousel-top__dot");

    if (n > slideItems.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slideItems.length }

    slides.style.transform = `translateX(${-100 * (slideIndex - 1)}%)`;

    // Update dots
    dots.forEach((dot, index) => {
        dot.className = dot.className.replace(" active", "");
        if (index === slideIndex - 1) {
            dot.className += " active";
        }
    });
}

let autoPlayInterval = setInterval(() => {
    changeSlide(1);
}, 5000);