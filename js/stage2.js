$(function() {

    var scrollTop, roofHeight, winHeight;
    var roofHeight = $('#roof').outerHeight();
    var winHeight = $(window).height();
    var durationEnd = winHeight - roofHeight;
    var currentStage = $('#viewport').attr('class');
        
 var controller = new ScrollMagic.Controller();  
 TweenMax.set('.part_two .hoverDesc',{opacity:0,visibility:'hidden'});
 TweenMax.set('.zoomIcon q', {opacity:0,display:'none'});
 TweenMax.set(['.star_black', '.star_gold'], {display:'none'});

$(window).load(function(){

var star_black_on_triggers = ['#section1','#section2', '#section3','#section6', '#section10-1','#section11'];
var star_black_off_triggers = ['#section2 .part_two', '#section5', '#section7','#section8','#section9','#section12'];

var star_gold_on_triggers = ['#section2','#section8 .info','#section12'];
var star_gold_off_triggers = ['#section1','#section3','#section9','#section10','#foot'];

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
        triggerHook:'leave'
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
})
});
   $('.zoomIcon').each(function(){
      var $zoom = $(this).children('q');
      var hoverImg = TweenMax.to($zoom, .5, {opacity:1,display:'block'});
      hoverImg.pause();
      $(this).hover(function(){
        hoverImg.play();
      }, function(){
        hoverImg.reverse();
      });
   })

    // ovp 연동하기
    $('#video1').fnSetVideo({
        'ovpUrl': 'http://v.ovp.joins.com/pIdBq3gz',
        'ovpRo': 1, // 1 = 16:9, 2 = 1:1
        'ctrls': true,
        'loop': false,
        'preload': 'metadata',
        'poster': '/project/NCsoft/video/stage2_video1.jpg'
    });

      $('#video2').fnSetVideo({
        'ovpUrl': 'http://v.ovp.joins.com/9BGGq3ge',
        'ovpRo': 1, // 1 = 16:9, 2 = 1:1
        'ctrls': true,
        'loop': false,
        'preload': 'none',
        'poster': '/project/NCsoft/video/stage2_video2.jpg'
    });

        $('#video3').fnSetVideo({
        'ovpUrl': 'http://v.ovp.joins.com/2eVyAECk',
        'ovpRo': 1, // 1 = 16:9, 2 = 1:1
        'ctrls': true,
        'loop': false,
        'preload': 'none',
        'poster': '/project/NCsoft/video/stage2_video3.jpg'
    });


 $('.part_two .item').each(function(){
 	var $target = $(this).children('.hoverDesc'), $targetNum  = $(this).children('p');
    var hoverTween = TweenMax.to($target, 0.5, {visibility:'visible',opacity:1});
 	var hoverTextTween = TweenMax.to($targetNum, 0.5, {color:'#d8b17e'});
 	hoverTween.pause();
    hoverTextTween.pause();
 	$(this).hover(over, out);
 	function over(){
 		hoverTween.play();
        hoverTextTween.play();
 
 	}
 	function out(){
        hoverTween.reverse()
		hoverTextTween.reverse()
}
 })

 function clubSwiper(){
    var swiper = new Swiper('.clubSwiper', {
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
clubSwiper();
    
    var $left = $('.boxImg').offset().left+120;
    var skullTween = new TimelineMax()
      .fromTo('.skull', 2, {scale:0,opacity:0}, {ease: Bounce.easeOut,y:200,left:$left, scale:1,opacity:1,zIndex:999});
        var skullScene = new ScrollMagic.Scene({
        triggerElement:'.skull',
        triggerHook:.7,
        duration:300
    })
    .setTween(skullTween)
    .addTo(controller)

    var charFemaleTween = new TimelineMax()
      .fromTo('.characterFemale', 1, {scale:1}, {scale:0,ease: Bounce.easeInOut,y:200,left:0});
        var skullScene = new ScrollMagic.Scene({
        triggerElement:'.charBox',
        triggerHook:0,
        duration:300
    })
    .setTween(charFemaleTween)
    .addTo(controller)


    

    var chartScene = new ScrollMagic.Scene({
        triggerElement: '#chart',
        triggerHook:0.5,
    })
    .on('enter', function(){
        init6();
    })
    .addTo(controller);

   
    function barChart(target, to, trigger){
        var $target = $(target), $to = to;
         var barchartTween = new TimelineMax()
         .fromTo($target.find('q')[0], .5, {opacity:0,visibility:'hidden'}, {opacity:1,visibility:'visible'},1)
         .fromTo($target, .5, {width:0,visibility:'hidden'}, {visibility:'visible',width:$to},0);
     $(target).each(function(){
         var y2016 = new ScrollMagic.Scene({
        triggerElement:trigger,
        triggerHook:0.6
    })
    .setTween(barchartTween)
    .addTo(controller)
     })

  }
   
   barChart('.s2016 .bar',440, '.chart2');
   barChart('.s2015 .bar',400, '.chart2');
   barChart('.s2009 .bar',320, '.chart2');
   barChart('.s2003 .bar',160, '.chart2');
   barChart('.s1997 .bar',10, '.chart2');

   barChart('.y2016 .bar', 400, '.chart1');
   barChart('.y2012 .bar', 200, '.chart1');
   barChart('.y2008 .bar', 150, '.chart1');
   barChart('.y2004 .bar', 180, '.chart1');
   barChart('.y2000 .bar', 30, '.chart1');

    // var bridgeParallax = new TimelineMax()
    //     .fromTo('.bridge .bg', 1, {y:676},{y:0, ease: Linear.easeNone})

    // var bridgeParallaxScene = new ScrollMagic.Scene({
    //         triggerElement: '#section10',
    //         triggerHook :'start',
    //         duration: $('.bridge .bg').height() })
    //     .setTween(bridgeParallax)
    //     .addTo(controller);



});