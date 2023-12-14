var slideVariable = 0; 

let slide = document.querySelectorAll('.slidesection');

displayImage(slideVariable);

function nextImage() {
    slideVariable++;
    displayImage(slideVariable);
}

function previousImage() {
    slideVariable--;
    displayImage(slideVariable);
}

function displayImage(indexNum) {
    if (indexNum < 0) {
        slideVariable = slide.length - 1;
    } else if (indexNum >= slide.length) {
        slideVariable=0;
    }

    for (let i = 0; i < slide.length; i++) {
        slide[i].style.display = 'none';
    }

    slide[slideVariable].style.display = 'block';
}
   
function openNav() {
    document.getElementById("mobileNav").style.height = "100%";
}

function closeNav() {
    document.getElementById("mobileNav").style.height = "0%";
}

