/* stage3 */
$(function() {
	    // Defalut
    var scrollTop, roofHeight, winHeight;
    var roofHeight = $('#roof').outerHeight();
    var winHeight = $(window).height();
    var durationEnd = winHeight - roofHeight;
    var currentStage = $('#viewport').attr('class');
        
    var controller = new ScrollMagic.Controller(); 

	// var $offsetH = $(window).innerHeight();
 //    var productDesignScene = new ScrollMagic.Scene({
 //        triggerElement: "#pinContainer2",
 //        triggerHook: 'onLeave',
 //        duration: $offsetH*4 // 2100 + 1500
 //        })
 //        .setPin("#pinContainer2")
 //        .addTo(controller);

  
    // var pin1 = new ScrollMagic.Scene({
    //     triggerElement: "#pinContainer2",
    //     offset: 600
    //     })
    //     .setTween(
    //         new TimelineMax().fromTo(".scene1 .image1", 1, {opacity: 1}, {opacity: 1, ease: Linear.easeNone})
    //         .fromTo(".scene1 .desc",1, {opacity: 1}, {opacity: 1, ease: Linear.easeNone})
    //         .fromTo(".scene1 .desc p",1, {opacity: 0}, {opacity: 1, ease: Linear.easeNone})
    //     )
    //     .addTo(controller);
    // var pin2 = new ScrollMagic.Scene({
    //     triggerElement: "#pinContainer2",
    //     offset: 1200
    //     })
    //     .setTween(
    //         new TimelineMax().fromTo(".scene2 .image2", 1, {opacity: 0}, {opacity: 1, ease: Linear.easeNone})
    //      .fromTo(".scene2 .desc",0.5, {opacity: 0}, {opacity: 1, ease: Linear.easeNone})
    //      .fromTo(".scene2 .desc p",1, {opacity: 0}, {opacity: 1, ease: Linear.easeNone})
    //     )
    //     .addTo(controller);

    // var pin3 = new ScrollMagic.Scene({
    //     triggerElement: "#pinContainer2",
    //     offset:  1800
    //     })
    //     .setTween(
    //         new TimelineMax().fromTo(".scene .image3", 1, {opacity: 0}, {opacity: 1, ease: Linear.easeNone})
    //       .fromTo(".scene3 .desc",1, {opacity: 0}, {opacity: 1, ease: Linear.easeNone})
    //       .fromTo(".scene3 .desc p",1, {opacity: 0}, {opacity: 1, ease: Linear.easeNone})
    //     )
    //     .addTo(controller);

    //     var pin4 = new ScrollMagic.Scene({
    //     triggerElement: "#pinContainer2",
    //     offset:  1200
    //     })
    //     .setTween(
    //         new TimelineMax().fromTo(".scene .image4", 1, {opacity: 0}, {opacity: 1, ease: Linear.easeNone})
    //       .fromTo(".scene4 .desc",1, {opacity: 0}, {opacity: 1, ease: Linear.easeNone})
    //       .fromTo(".scene4 .desc p",1, {opacity: 0}, {opacity: 1, ease: Linear.easeNone})
    //     )
    //     .addTo(controller);
   
 

function gameScreenShotSwiper(){
    var swiper = new Swiper('.gameScreenShotSwiper', {
    preloadImages: false,
    lazyLoading: true,
    slidesPerView: 'auto',
    paginationClickable: true,
    spaceBetween: 10,
    autoplay:true,
     autoplay: 2500,
    lazyLoadingOnTransitionStart:true
    });
}  
gameScreenShotSwiper();
    });