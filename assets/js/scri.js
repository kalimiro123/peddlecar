$(document).ready(function(){

  $('.owl-carousel-stacked').owlCarousel({
    loop:true,
    margin:3,
    nav:true,
    dots:false,
    center:true,
    autoplay:false,
    smartSpeed: 800,
    autoplayHoverPause:true,
    navText: [
      '<span class="fa-stack fa-lg"><i class="fa fa-circle-thin fa-stack-2x" ></i><i class="fa fa-caret-left fa-stack-1x"></i></span>',
      '<span class="fa-stack fa-lg"><i class="fa fa-circle-thin fa-stack-2x" ></i><i class="fa fa-caret-right fa-stack-1x"></i></span>'
    ],
    responsive:{

    0:{
        items:1, 
    },
    576:{
        items:1, 
    },
    768:{
        items:2,
    },
    992:{
        items:3,
    },
    1200:{
        items:5,
    }
        
    }
});


});


  