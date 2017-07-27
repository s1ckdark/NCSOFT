$(function() {

        var scrollTop, roofHeight, winHeight;
    var roofHeight = $('#roof').outerHeight();
    var winHeight = $(window).height();
    var viewportWidth = $('#viewport').innerWidth();
   
    var controller = new ScrollMagic.Controller();
  function jsySwiper(){
    var swiper = new Swiper('.jsySwiper', {
    preloadImages: false,
    lazyLoading: true,
    slidesPerView: 'auto',
    paginationClickable: true,
    spaceBetween: 10,
    // autoplay:true,
     // autoplay: 2500,
    lazyLoadingOnTransitionStart:true,
    pagination: '.progress_num',
    paginationClickable: true,
    paginationType: "custom",
    paginationCustomRender: function (swiper, current, total) {
      return '<span class="current">'+ current + '</span><span class="last">' + total +'</span>';
  }
    });
}  

jsySwiper();


 var chartnc1 = new ScrollMagic.Scene({
        triggerElement: '.gp_class_box01',triggerHook:0.5,
    })
        .addTo(controller)
        .on('enter', function(){
            // init();
            nc_chart01.gotoAndPlay(1);
        });

    var chartnc2 = new ScrollMagic.Scene({
        triggerElement: '.gp_class_box02',triggerHook:0.5,
    })
        .addTo(controller)
        .on('enter', function(){
            // init2();
            nc_chart02.gotoAndPlay(1);
        });

    var chartnc3 = new ScrollMagic.Scene({
        triggerElement: '.gp_class_box03',triggerHook:0.5,
    })

        .addTo(controller)
        .on('enter', function(){
            // init3();
            nc_chart03.gotoAndPlay(1);
        });


    var chartnc4 = new ScrollMagic.Scene({
        triggerElement: '.gp_class_box05',triggerHook:0.5,
    })

        .addTo(controller)
        .on('enter', function(){
            // init4();
            nc_chart04.gotoAndPlay(1);
        });


    var chartnc5 = new ScrollMagic.Scene({
        triggerElement: '.gp_class_box04',triggerHook:0.5,
    })
        .addTo(controller)
        .on('enter', function(){
            // init5();
            nc_chart05.gotoAndPlay(1);
        });
});