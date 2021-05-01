let slideNumber = 1;
let slides = document.getElementsByClassName('slide');
let arrows = document.getElementsByClassName('arrow');

//Nav up-arrow initial color
arrows[0].style.color = '#AFAFAF';

function changeSlide(n) {

    //Defining position of slide that is being changed
    previousSlide = slides[slideNumber - 1];

    //Changes slide number
    if(slideNumber === 1 && n === -1) {
        slideNumber = 1;
        arrows[0].style.color = '#AFAFAF';
    } else if((slideNumber + n) >= 1 && (slideNumber + n) <= slides.length) {
        slideNumber = slideNumber + n;
        arrows[0].style.color = '#FFF';
        arrows[1].style.color = '#FFF';
    } else if(slideNumber === slides.length && n === 1) {
        slideNumber = slides.length;
        arrows[1].style.color = '#AFAFAF';
    }

    //Defining position of slide that will be shown
    currentSlide = slides[slideNumber - 1];

    if(n === -1 && slideNumber >= 1) {
        previousSlide.style.backgroundPosition = 'center top';
        currentSlide.style.backgroundPosition = 'center bottom';
    } else if (n === 1 && slideNumber <= slides.length) {
        previousSlide.style.backgroundPosition = 'center bottom';
        currentSlide.style.backgroundPosition = 'center top';
    }

    //Hiding previous slide and showing the current
    previousSlide.classList.remove('slide-active');
    currentSlide.classList.add('slide-active');
    
}