let currentSlide = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.video');
    const totalSlides = slides.length;

    currentSlide += direction;

    if (currentSlide < 0) {
        currentSlide = totalSlides - 1; // Loop to last slide
    } else if (currentSlide >= totalSlides) {
        currentSlide = 0; // Loop to first slide
    }

    const carouselInner = document.querySelector('.carousel-inner');
    const offset = -currentSlide * 100; // Move based on slide index
    carouselInner.style.transform = `translateY(${offset}%)`;
}
