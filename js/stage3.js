/* stage3 */
$(function() {
	    // Defalut
    var scrollTop, roofHeight, winHeight;
    var roofHeight = $('#roof').outerHeight();
    var winHeight = $(window).height();
    var durationEnd = winHeight - roofHeight;
    var currentStage = $('#viewport').attr('class');
        
    var controller = new ScrollMagic.Controller(); 

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

TweenMax.set(['.star_black', '.star_gold'],{display:'none'});
$(window).load(function(){
var star_black_on_triggers = ['#section1','#section3', '#section8','#section10'];
var star_black_off_triggers = ['#section1 .part_three', '#section2', '#section4', '#section5','#section8','#section9','#section11'];

var star_gold_on_triggers = ['#section1 .part_four','#section7'];
var star_gold_off_triggers = ['#section1', '#section2',  '#section5','#section8','#section9'];

star_black_on_triggers.forEach(function (trigger, index) {
    // make tween
    // make scene
    var star_black_on = TweenMax.set('.star_black',{display:'block'});
    new ScrollMagic.Scene({
        triggerElement: trigger,
        triggerHook:'enter'
    })
    .setTween(star_black_on)
    .addTo(controller);
});

star_black_off_triggers.forEach(function (trigger, index) {
    // make tween
    // make scene
    var star_black_off = TweenMax.set('.star_black',{display:'none'});
    var blackoff = new ScrollMagic.Scene({
        triggerElement: trigger,
        triggerHook:'leave'
    })
    .setTween(star_black_off)
    .addTo(controller);
});

star_gold_on_triggers.forEach(function (trigger, index) {
    // make tween
    // make scene
    var star_gold_on = TweenMax.set('.star_gold',{display:'block'});
    new ScrollMagic.Scene({
        triggerElement: trigger,
        triggerHook:.5
    })
    .setTween(star_gold_on)
    .addTo(controller);
});

star_gold_off_triggers.forEach(function (trigger, index) {
    // make tween
    // make scene
    var star_gold_off = TweenMax.set('.star_gold',{display:'none'});
    new ScrollMagic.Scene({
        triggerElement: trigger,
        triggerHook:'leave'
    })
    .setTween(star_gold_off)
    .addTo(controller);
});
})
    });