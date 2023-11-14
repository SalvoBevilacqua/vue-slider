// array con le immagini da inserire
const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

console.log(images);

// IMMAGINI PRINCIPALI

// inizializzo ciò che andrà in html
let stringImageForHtml = "";

images.forEach((element) => {
    stringImageForHtml += oneImage(element);  
});

// seleziono dove devo inserire la stringa
const divSlider = document.querySelector(".items");

// inserisco la stringa
divSlider.innerHTML += stringImageForHtml;

// THUMBNAILS

// inizializzo ciò che andrà in thumbnails
let stringThumbForHtml = "";

images.forEach((element) => {
    stringThumbForHtml += oneThumb(element);
});

// seleziono dove devo inserire le thumb
const divThumb = document.querySelector(".thumbnails");

// inserisco le thumb
divThumb.innerHTML += stringThumbForHtml;

// FUNZIONAMENTO SLIDER

// seleziono tutti i div con le immagini
const slide = document.querySelectorAll(".item");

// seleziono tutti i div con le thumb
const slideThumb = document.querySelectorAll(".thumb");

// inserisco la classe active nel primo elemento
let index = 0;
slide[index].classList.add("active");
slideThumb[index].classList.add("active");

// inserisco la classe active nello slide
document.querySelector(".next").addEventListener
("click", function(event)
{
    event.preventDefault();
    clearInterval(interval);
    next();
    interval  = setInterval(next, 3000);
})

document.querySelector(".prev").addEventListener
("click", function(event)
{
    event.preventDefault();
    clearInterval(interval);
    prec();
    interval  = setInterval(next, 3000);
})

let interval  = setInterval(next, 3000);

document.querySelector(".items").addEventListener("mouseover", function() {
    clearInterval(interval);
})

document.querySelector(".items").addEventListener("mouseleave", function() {
    interval  = setInterval(next, 3000);
})

// FUNCTIONS
function next(){
    if(index < images.length - 1) {
        slide[index].classList.remove("active");
        slideThumb[index].classList.remove("active");
        index++;
        slide[index].classList.add("active");
        slideThumb[index].classList.add("active");
    } else {
        slide[index].classList.remove("active");
        slideThumb[index].classList.remove("active");
        index = 0;
        slide[index].classList.add("active");
        slideThumb[index].classList.add("active");
    }
}

function prec() {
    if(index > 0){
        slide[index].classList.remove("active");
        slideThumb[index].classList.remove("active");
        index--;
        slide[index].classList.add("active");
        slideThumb[index].classList.add("active");
    } else {
        slide[index].classList.remove("active");
        slideThumb[index].classList.remove("active");
        index = images.length -1;
        slide[index].classList.add("active");  
        slideThumb[index].classList.add("active");      
    }
}

function oneImage(elem) {

    const text =  
    `<div class="item">
        <img src="${elem.image}" alt="test">
        <div class="white">
            <h3>${elem.title}</h3>
            <p>${elem.text}</p>
        </div>                
    </div>`;

    return text;
}

function oneThumb(elem) {

    const text =`
    <div class="thumb">
        <img src="${elem.image}" alt="test">
    </div>
    `;

    return text;
}