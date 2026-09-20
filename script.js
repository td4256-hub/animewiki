
let currentSlide = 0;

const slides = document.querySelectorAll(".anime-card-slider");

function showSlide(index) {

    if (index >= slides.length) {
        currentSlide = 0;
    }

    if (index < 0) {
        currentSlide = slides.length - 1;
    }

    slides.forEach((slide, i) => {

        if (i === currentSlide) {
            slide.style.display = "block";
        } else {
            slide.style.display = "none";
        }

    });

}

function nextSlide() {
    currentSlide++;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide--;
    showSlide(currentSlide);
}



showSlide(currentSlide);


setInterval(() => {
    nextSlide();
}, 3000);