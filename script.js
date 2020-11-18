var slidePosition = 0;
var time = 3000;
const image = document.getElementsByClassName('image');
const totalSlides = image.length;
const btn = document.getElementById('teste');
const dots = document.getElementsByClassName('dot');





//Mudar imagens
function updateSlider() {
    for(var images of image) {
        images.classList.remove('image__active');
        images.classList.add('image__hidden');
    }

    image[slidePosition].classList.add('image__active');    
}

function moveNextSlide() { 
    if (slidePosition == totalSlides -1) { 
        slidePosition = 0; 
    } else {
        slidePosition ++;
    }

    setTimeout("moveNextSlide()", time);

    updateSlider();
    updateDot();
    
}

moveNextSlide();

//Atualizar posição dos pontos
function updateDot() {
    for (var dot of dots) {
        dot.classList.remove('dot-active');
    }

    dots[slidePosition].classList.add('dot-active');
}

  