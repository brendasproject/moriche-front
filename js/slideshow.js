let slideNumber = 1;
let slideWrapper = document.getElementsByClassName('slide-wrapper')[0];
let slides = document.getElementsByClassName('slide');
let arrows = document.getElementsByClassName('arrow');

arrows[0].style.opacity = '0.3';

function changeSlide(n) {

    let displacement = 0;

    //Defining position of slide that is being changed
    //previousSlide = slides[slideNumber - 1];

    //Changes slide number
    if(slideNumber === 1 && n === -1) {
        slideNumber = 1;
    } else if((slideNumber + n) >= 1 && (slideNumber + n) <= slides.length) {
        slideNumber = slideNumber + n;
        arrows[0].style.opacity = '1';
        arrows[1].style.opacity = '1';
    } else if(slideNumber === slides.length && n === 1) {
        slideNumber = slides.length;
    }

    displacement = (slideNumber - 1) * -100;

    slideWrapper.style.top = displacement + '%';

    //Defining position of slide that will be shown
    //currentSlide = slides[slideNumber - 1];

    /*if(currentSlide === previousSlide){
        console.log('here');
        return;
    } */

    /*if(n === -1 && slideNumber >= 1) {
        previousSlide.style.top = '100%';
    } else if (n === 1 && slideNumber <= slides.length) {
        previousSlide.style.top = '-100%';
    }*/

    //Hiding previous slide and showing the current
    /*previousSlide.classList.remove('slide-active');
    currentSlide.classList.add('slide-active');*/

    //Move up or down the slide depending of the slide being portrayed
    

    //Change arrows opacity
    if(slideNumber === 1) {
        arrows[0].style.opacity = '0.3';
    } else if (slideNumber === slides.length) {
        arrows[1].style.opacity = '0.3';
    }

}

//Calling changeSlide for the first time
changeSlide(-1);