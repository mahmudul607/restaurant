

window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
   
    const targetHeight = windowHeight * 0.5;
    if(scrollPosition > targetHeight) {
        navbar.classList.add('navbar-scrolled');
        
    }
    else{
        navbar.classList.remove('navbar-scrolled');
    }

});


// owl carousel


$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    })

});