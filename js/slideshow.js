

const chapters =[
        {
            name:"chapter 1",
            images:[,"img/test1.jpg","img/test2.jpg"],
            audio:[]

        },
        {
            name:"chapter 2",
            images:["img/test1.jpg","img/test2.jpg"],
            audio:[]
        },
        {
            name:"chapter 3",
            images:["img/test1.jpg","img/test2.jpg"],
            audio:[]
        },
        {
            name:"chapter 4",
            images:["img/test1.jpg","img/test2.jpg"],
            audio:[]
        },
 ];
localStorage.setItem("boolean",false);
let menuOpen=document.querySelector(".menu-bar");
let menuclose=document.querySelector(".close-menu");

menuOpen.style.display="none";
let icoMenu=document.querySelector(".ico-menu");

icoMenu.addEventListener("click",(e)=>{

        if(localStorage.getItem("boolean")=="false"){
            menuOpen.style.display="block";
            icoMenu.style.display="none";
            localStorage.setItem("boolean",true);

        }else if(Boolean(localStorage.getItem("boolean"))){
            menuOpen.style.display="none";
            localStorage.setItem("boolean",false);
        }
});

menuclose.addEventListener("click",()=>{

    icoMenu.style.display="block";
    menuOpen.style.display="none";
    localStorage.setItem("boolean",false);
});

console.log(icoMenu);

for (let i = 1; i <=4; i++) {

    document.querySelector(".chapter-"+i+"").addEventListener("click",()=>{
        changeChapter(i);
    });
}

const changeChapter=(iterrador)=>{
    console.log(iterrador);
    let slideDiv=document.createElement("div");
    let slideTitle=document.createElement("h1");
    let slideSubTitle=document.createElement("h6");
    let slideText=document.createElement("p");


    chapters.forEach((element,index)=>{
        if(iterrador==index){

        }
    })
}






















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