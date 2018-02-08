$(document).ready(function(){


   /*
   *   Owl carousel
   **/
$(document).ready(function($) {
             var owl = $('.owl-carousel');
             owl.owlCarousel({
                   items:4,
                   dots:true,
                   nav:true,
                   navText: ['<i class="fa fa-chevron-left fa-1x"></i>', '<i class="fa fa-chevron-right fa-1x"></i>'],
                   loop:true,
                   margin:0,
                   height:400,
                  autoplay:false,
                  autoplayTimeout:5000,
                  autoplayHoverPause:false,
                  responsiveClass:true,
                  responsive:{
                    0:
                    {
                      items:1 
                    },
                    400:
                    {
                      items:1 
                    },
                    700:
                    {
                      items:2 
                    },
                    1000:
                    {
                      items:4 
                    }

                  }
               });
          $('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
});
          $('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})
});




    /*
   *   Nicescroll 
   **/

    jQuery("body").niceScroll({
    cursorcolor:"#000",
    cursorborder:"0px",
    cursorwidth :"8px",
    zindex:"9999"
  });

});