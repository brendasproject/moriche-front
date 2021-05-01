let slideNumber = 1;
let slides = document.getElementsByClassName('slide');

function changeSlide(n) {
    if(slideNumber === 1 && n === -1) {
        slideNumber = 1;
    } else if((slideNumber + n) >= 1 && (slideNumber + n) <= slides.length) {
        slideNumber = slideNumber + n;
    } else if(slideNumber === slides.length && n === 1) {
        slideNumber = slides.length;
    }
}