$(function() {
           var scrollTop, roofHeight, winHeight;
    var roofHeight = $('#roof').outerHeight();
    var winHeight = $(window).height();
    var viewportWidth = $('#viewport').innerWidth();
   
    var controller = new ScrollMagic.Controller();

    // init6();

     // ovp 연동하기
    $('#video1').fnSetVideo({
        'ovpUrl': 'http://v.ovp.joins.com/pIdBq3gz',
        'ovpRo': 1, // 1 = 16:9, 2 = 1:1
         'ctrls': true,
        'loop': false,
         'preload': 'auto',
        'poster': '/project/NCSOFT/video/stage2_video1.jpg'
    });

      $('#video2').fnSetVideo({
        'ovpUrl': 'http://v.ovp.joins.com/9BGGq3ge',
        'ovpRo': 1, // 1 = 16:9, 2 = 1:1
        'ctrls': true,
        'loop': false,
        'preload': 'auto',
        'poster': '/project/NCSOFT/video/stage2_video2.jpg'
    });

        $('#video3').fnSetVideo({
        'ovpUrl': 'http://v.ovp.joins.com/2eVyAECk',
        'ovpRo': 1, // 1 = 16:9, 2 = 1:1
        'ctrls': true,
        'loop': false,
        'preload': 'auto',
        'poster': '/project/NCSOFT/video/stage2_video3.jpg'
    });

 $('.part_three .item').each(function(){
 	var $target = $(this).children('.hoverDesc');
 	var hoverTween = TweenMax.to($target, 0.5, {visibility:'visible',opacity:1});
 	hoverTween.pause();
 	$(this).hover(over, out);
 	function over(){
 		hoverTween.play();
 	}
 	function out(){
		hoverTween.reverse()
}
 })
    // init6(); 
function clubSwiper(){
    var swiper = new Swiper('.clubSwiper', {
    preloadImages: false,
    lazyLoading: true,
    slidesPerView: 'auto',
    paginationClickable: true,
    spaceBetween: 10,
    autoplay:true,
    autoplay: 2500,
    loop:true,
    lazyLoadingOnTransitionStart:true,
    pagination: '.progress_num',
    paginationClickable: true,
    paginationType: "custom",
    nextButton: '.arrow-next',
    paginationCustomRender: function (swiper, current, total) {
      return '<span class="current">'+ current + '</span><span class="last">' + total +'</span>';
  }
    });
}  
clubSwiper();
 
    var $left = $('.boxImg').offset().left+200;
     var skullTween = new TimelineMax()
      .fromTo('.skull', 2, {scale:0,opacity:0,x:-100}, {ease: Bounce.easeOut,left:$left, y:-100, scale:1,opacity:1,zIndex:999});
        var skullScene = new ScrollMagic.Scene({
        triggerElement:'.skull',
        triggerHook:.6,
        duration:300
    })
    .setTween(skullTween)
    .addTo(controller)

    var charFemaleTween = new TimelineMax()
      .fromTo('.characterFemale', 1, {scale:1}, {scale:0,ease: Bounce.easeInOut,y:100,left:0});
        var skullScene = new ScrollMagic.Scene({
        triggerElement:'.charBox',
        triggerHook:0,
        duration:300
    })
    .setTween(charFemaleTween)
    .addTo(controller)


    function barChart(target, to, trigger){
        var $target = $(target), $to = to * .5;
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
   

    TweenMax.set('.bars2 .bar', {width:0});
    TweenMax.set(['.bars2 .name', '.bars2 .data'], {opacity:0});
    TweenMax.set('.bars2 cite', {y:15, opacity:0});

    var data6Count = $('#data6').data('count'), // 인포그래픽 데이타1
        data7Count = $('#data7').data('count'), // 인포그래픽 데이타1
        data8Count = $('#data8').data('count'), // 인포그래픽 데이타1
        data9Count = $('#data9').data('count'), // 인포그래픽 데이타1
        data10Count = $('#data10').data('count'); // 인포그래픽 데이타1

    var percentDataOption = {useEasing:false, useGrouping:false, separator:'', decimal:'억 ', suffix:'만원'}
        data6 = new CountUp( 'data6', 0, data6Count, 4, .8, percentDataOption),
        data7 = new CountUp( 'data7', 0, data7Count, 4, .8, percentDataOption),
        data8 = new CountUp( 'data8', 0, data8Count, 4, .8, percentDataOption),
        data9 = new CountUp( 'data9', 0, data9Count, 4, .8, percentDataOption),
        data10 = new CountUp( 'data10', 0, data10Count, 4, .8, percentDataOption)

    var barBox2Tween = new TimelineMax({onComplete:bars2Anim})
        .to('.bars2 .name', .4, {opacity:1});
        // .staggerTo('.bars2 .data', .6, {opacity:1}, .2);

    function bars2Anim(){
        data6.start();
        data7.start();
        data8.start();
        data9.start();
        data10.start();
        TweenMax.to('.bars2 .bar6', .8, {width: $('.bars2 .bar6').data('max') });
        TweenMax.to('.bars2 .bar7', .8, {width: $('.bars2 .bar7').data('max') });
        TweenMax.to('.bars2 .bar8', .8, {width: $('.bars2 .bar8').data('max') });
        TweenMax.to('.bars2 .bar9', .8, {width: $('.bars2 .bar9').data('max') });
        TweenMax.to('.bars2 .bar10', .8, {width: $('.bars2 .bar10').data('max') });
        TweenMax.staggerTo('.bars2 .data', .4, {opacity:1}, .2);
        TweenMax.to('.bars2 cite', .4, {y:0, opacity:1, delay:.4});
    }

        var barBoxScene = new ScrollMagic.Scene({
            triggerElement: '.statusChart'
        })
        .setTween(barBox2Tween)
        .reverse(false)
        .addTo(controller);


    TweenMax.set('.bars .bar', {width:0});
    TweenMax.set(['.bars .name', '.bars .data'], {opacity:0});
    TweenMax.set('.bars cite', {y:15, opacity:0});

    var data1Count = $('#data1').data('count'), // 인포그래픽 데이타1
        data2Count = $('#data2').data('count'), // 인포그래픽 데이타1
        data3Count = $('#data3').data('count'), // 인포그래픽 데이타1
        data4Count = $('#data4').data('count'), // 인포그래픽 데이타1
        data5Count = $('#data5').data('count'); // 인포그래픽 데이타1

    var percentDataOption = {useEasing:false, useGrouping:false, separator:'', decimal:'억 ', suffix:'만원'}
        data1 = new CountUp( 'data1', 0, data1Count, 4, .8, percentDataOption),
        data2 = new CountUp( 'data2', 0, data2Count, 4, .8, percentDataOption),
        data3 = new CountUp( 'data3', 0, data3Count, 4, .8, percentDataOption),
        data4 = new CountUp( 'data4', 0, data4Count, 4, .8, percentDataOption),
        data5 = new CountUp( 'data5', 0, data5Count, 4, .8, percentDataOption)

    var barBox1Tween = new TimelineMax({onComplete:bars1Anim})
        .to('.bars .name', .6, {opacity:1});

    function bars1Anim(){
        data1.start();
        data2.start();
        data3.start();
        data4.start();
        data5.start();
        TweenMax.to('.bars .bar1', .8, {width: $('.bars .bar1').data('max') });
        TweenMax.to('.bars .bar2', .8, {width: $('.bars .bar2').data('max') });
        TweenMax.to('.bars .bar3', .8, {width: $('.bars .bar3').data('max') });
        TweenMax.to('.bars .bar4', .8, {width: $('.bars .bar4').data('max') });
        TweenMax.to('.bars .bar5', .8, {width: $('.bars .bar5').data('max') });
        TweenMax.staggerTo('.bars .data', .4, {opacity:1}, .2);
        TweenMax.to('.bars cite', .4, {y:0, opacity:1, delay:.4});
    }

        var barBoxScene = new ScrollMagic.Scene({
            triggerElement: '.incomingfrom'
        })
        .setTween(barBox1Tween)
        .reverse(false)
        .addTo(controller);


});