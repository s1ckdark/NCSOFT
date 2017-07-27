$(function() {

    var scrollTop, roofHeight, winHeight;
    var roofHeight = $('#roof').outerHeight();
    var winHeight = $(window).height();
    var durationEnd = winHeight - roofHeight;
    var currentStage = $('#viewport').attr('class');
        
 var controller = new ScrollMagic.Controller();  
 // TweenMax.set('.part_two .hoverDesc',{opacity:0,visibility:'hidden'});
 TweenMax.set('.zoomIcon q', {opacity:0,display:'none'});


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
        'preload': 'none',
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
        'ovpUrl': 'http://v.ovp.joins.com/mcozx2XE',
        'ovpRo': 1, // 1 = 16:9, 2 = 1:1
        'ctrls': true,
        'loop': false,
        'preload': 'none',
        'poster': '/project/NCsoft/video/stage2_video3.jpg'
    });

 // // create scene to pin and link animation
 //        $('.panel').css({'height': winHeight });
 //        $('#pinContainer').css({'height': winHeight*3 });
       
 //        var wipeAnimation1 = new TimelineMax()
 //            .fromTo(".panel.pin1 .image", 1, {y: "0%" }, {y: "-100%",  ease: Linear.easeNone }, .5)  
 //            .fromTo(".panel.pin1 .desc", 1, {y:  "0%" }, {y: "100%", ease: Linear.easeNone}, .5)
 //            .fromTo(".panel.pin2 .image", 1, {y: "-100%"}, {y: "0%",  ease: Linear.easeNone }, .5)  
 //            .fromTo(".panel.pin2 .desc", 1, {y:  "0%"}, {y: "100%",ease: Linear.easeNone}, .5);
       
 //        var wipeAnimation2 = new TimelineMax()
 //            .fromTo(".panel.pin2 .image", 1, {y: "-100%"}, {y: "100%", ease: Linear.easeNone}, .5)  
 //            .fromTo(".panel.pin2 .desc", 1, {y:  "0%"}, {y: "-100%", ease: Linear.easeNone}, 1)
 //            .fromTo(".panel.pin3 .image", 1, {y: "0%"}, {y: "100%", ease: Linear.easeNone}, .5)  
 //            .fromTo(".panel.pin3 .desc", 1, {y:  "0%"}, {y: "-100%",ease: Linear.easeNone}, .1);

        // create scene to pin and link animation
         // new ScrollMagic.Scene({
         //        triggerElement: "#pinContainer",
         //        triggerHook: 'onLeave',
         //        duration:'100%'
         //    })
         //    .setPin("#pinContainer")
         //    .addIndicators() // add indicators (requires plugin)
         //    .addTo(controller);

         // new ScrollMagic.Scene({
         //        triggerElement: ".pin2",
         //        triggerHook: 'onLeave',
         //        duration:winHeight
         //    })
         //    .setPin(".pin2")
         //    .setTween(wipeAnimation2)
         //    .addIndicators() // add indicators (requires plugin)
         //    .addTo(controller);

            //  new ScrollMagic.Scene({
            //     triggerElement: ".pin3",
            //     triggerHook: 'onLeave',
            //     duration:winHeight
            // })
            // .setPin(".pin3")
            // .setTween(wipeAnimation2)
            // .addIndicators() // add indicators (requires plugin)
            // .addTo(controller);

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


    
    function barChart(target, to){
     var $target = $(target), $to = to;
         var barchartTween = new TimelineMax()
         .fromTo($target.find('q')[0], 1, {opacity:0,visibility:'hidden'}, {opacity:1,visibility:'visible'},1)
         .fromTo($target, 1, {width:0,visibility:'hidden'}, {visibility:'visible',width:$to},0);
     $(target).each(function(){
         var y2016 = new ScrollMagic.Scene({
        triggerElement:this,
        triggerHook:0.7
    })
    .setTween(barchartTween)
    .addTo(controller)
     })

  }

    var chartScene = new ScrollMagic.Scene({
        triggerElement: '#chart',
        triggerHook:0.5,
    })
    .on('enter', function(){
        init6();
    })
    .addTo(controller);

   
   barChart('.s2016 .bar',400);
   barChart('.s2015 .bar',380);
   barChart('.s2009 .bar',300);
   barChart('.s2003 .bar',140);
   barChart('.s1997 .bar',20);

   barChart('.y2016 .bar', 400);
   barChart('.y2012 .bar', 200);
   barChart('.y2008 .bar', 100);
   barChart('.y2004 .bar', 150);
   barChart('.y2000 .bar', 10);


   var pageDown = new TimelineMax()
        .fromTo(".event1", 1, {height:0}, {height:'676px'})
        .fromTo(".event2", 1, {height:'676px'}, {height:'0px'});

   //  new ScrollMagic.Scene({
   //    triggerElement: "#section11",
   //    triggerHook: 'onLeave',
   //    duration:"100%"
   //  })
   //  .setPin("#section11")
   //  .addIndicators()
   //  .addTo(controller);

   //  new ScrollMagic.Scene({
   //    triggerElement: "#pin",
   //    triggerHook: 'onLeave',
   //    duration:"676px"
   //  })
   //  .setTween(pageDown)
   //  .setPin("#pin", {pushfollowers:false})
   //  .addIndicators()
   //  .addTo(controller);
  $('.event').map((i,d)=>{
    new ScrollMagic.Scene({
      triggerElement: ".event",
      triggerHook: 0.7,
      duration: "676px"
    }).setPin(d.children[0],{
      pushFollowers: false
    })
    .setTween(pageDown)
    .addTo(controller);
  })

});