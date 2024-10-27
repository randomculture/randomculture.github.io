let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.video');
    slides.forEach((slide, i) => {
        slide.classList.remove('active'); // Hide all slides
        if (i === index) {
            slide.classList.add('active'); // Show the current slide
        }
    });
}

function moveSlide(direction) {
    const slides = document.querySelectorAll('.video');
    const totalSlides = slides.length;

    currentSlide += direction;

    if (currentSlide < 0) {
        currentSlide = totalSlides - 1; // Loop to last slide
    } else if (currentSlide >= totalSlides) {
        currentSlide = 0; // Loop to first slide
    }

    showSlide(currentSlide);
}

// Initialize the first slide
showSlide(currentSlide);
