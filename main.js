

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
    $('.popular-product .owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        
        autoplay:true,
        responsive:{
            0:{
                items:1,
                nav:true,
            },
            600:{
                items:2,
                nav:true,
            },
            1000:{
                items:4,
                nav:true,
            }
        }
    })

// customers say carousel
    $('.customers-say .owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        
        autoplay:true,
        responsive:{
            0:{
                items:1,
                nav:true,
            },
            600:{
                items:1,
                nav:true,
            },
            1000:{
                items:1,
                nav:true,
            }
        }
    })

});