$(function() {


    var scrollTop, roofHeight, winHeight;
    var roofHeight = $('#roof').outerHeight();
    var winHeight = $(window).height();
    var durationEnd = winHeight - roofHeight;
    var currentStage = $('#viewport').attr('class');
        
    var controller = new ScrollMagic.Controller(); 
    init(); // 그래프 1번 - 콘텐츠산업 내 수출기여도
    init2(); // 그래프 2번 - 콘텐츠산업 내 매출비중?
    init3(); // 그래프 2번 - 콘텐츠산업 내 매출비중?
    init4(); // 그래프 2번 - 콘텐츠산업 내 매출비중?
    init5(); // 그래프 2번 - 콘텐츠산업 내 매출비중?
    // init6(); // 그래프 2번 - 콘텐츠산업 내 매출비중?

    
  function jsySwiper(){
    var swiper = new Swiper('.jsySwiper', {
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
jsySwiper();

        $('.panel').css({'height': winHeight });
        $('#pinContainer').css({'height': winHeight });


    // ovp 연동하기
    $('#video1').fnSetVideo({
        'ovpUrl': 'http://v.ovp.joins.com/nxSoq3gI',
        'ovpRo': 1, // 1 = 16:9, 2 = 1:1
        'ctrls': true,
        'loop': false,
        'preload': 'none',
        'poster': '/project/NCsoft/video/stage1_video1.jpg'
    });

      $('#video2').fnSetVideo({
        'ovpUrl': 'http://v.ovp.joins.com/9UcwlLLT',
        'ovpRo': 1, // 1 = 16:9, 2 = 1:1
        'ctrls': true,
        'loop': false,
        'preload': 'none',
        'poster': '/project/NCsoft/video/stage1_video2.jpg'
    });

        $('#video3').fnSetVideo({
        'ovpUrl': 'http://v.ovp.joins.com/2vT0q3gl',
        'ovpRo': 1, // 1 = 16:9, 2 = 1:1
        'ctrls': true,
        'loop': false,
        'preload': 'none',
        'poster': '/project/NCsoft/video/stage1_video3.jpg'
    });

         $('#video4').fnSetVideo({
        'ovpUrl': 'http://v.ovp.joins.com/nY0ox2XE',
        'ovpRo': 1, // 1 = 16:9, 2 = 1:1
        'ctrls': true,
        'loop': false,
        'preload': 'none',
        'poster': '/project/NCsoft/video/stage1_video4.jpg'
    });

  var chartnc1 = new ScrollMagic.Scene({triggerElement: '.gp_class_box01',triggerHook:0.5})
        .on('enter', function(){
            // init();
            nc_chart01.gotoAndPlay(1);
        })
        .addTo(controller);

    var chartnc2 = new ScrollMagic.Scene({triggerElement: '.gp_class_box02',triggerHook:0.5})
        .on('enter', function(){
            // init2();
            nc_chart02.gotoAndPlay(1);
        })
        .addTo(controller);

    var chartnc3 = new ScrollMagic.Scene({triggerElement: '.gp_class_box03',triggerHook:0.85})
        .on('enter', function(){
            // init3();
            nc_chart03.gotoAndPlay(1);
        })
        .addTo(controller);


    var chartnc4 = new ScrollMagic.Scene({triggerElement: '.gp_class_box05',triggerHook:0.85})
        .on('enter', function(){
            // init4();
            nc_chart04.gotoAndPlay(1);
        })
        .addTo(controller);


    var chartnc5 = new ScrollMagic.Scene({triggerElement: '.gp_class_box04',triggerHook:0.85})
        .on('enter', function(){
            // init5();
            nc_chart05.gotoAndPlay(1);
        })
        .addTo(controller);

    var ncscene03 = new TimelineMax()
        .fromTo(".gp_class_set .gp_class_box03_view", 0.3, {opacity: 0, y: 70, ease: Power0.easeNone}, {opacity: 1, y: 0}, 0.65);
    var ncsceneman1 = new ScrollMagic.Scene({triggerElement: ".gp_class_box03_left",triggerHook: 0.85})
        .setTween(ncscene03)
        .addTo(controller);


    var ncscene04 = new TimelineMax()
        .fromTo(".gp_class_set .gp_class_box04_view", 0.3, {opacity: 0, y: 70, ease: Power0.easeNone}, {opacity: 1, y: 0}, 0.65);
    var ncsceneman1 = new ScrollMagic.Scene({triggerElement: ".gp_class_box04_left",triggerHook: 0.85})
        .setTween(ncscene04)
        .addTo(controller);


    var ncscene05 = new TimelineMax()
        .fromTo(".gp_class_set .gp_class_box05_view", 0.3, {opacity: 0, y: 70, ease: Power0.easeNone}, {opacity: 1, y: 0}, 0.65);
    var ncsceneman1 = new ScrollMagic.Scene({triggerElement: ".gp_class_box05_left",triggerHook: 0.85})
        .setTween(ncscene05)
        .addTo(controller);


        var pageDown = new TimelineMax()
            .add(TweenMax.to("#one", 1, {top: "-100%"}))
            .add(TweenMax.to("#two", 1, {top: "-100%"}))
            .add(TweenMax.to("#three", 1, {top: "-100%"}))
            .add(TweenMax.to("#four", 1, {top: "-100%"}))

        new ScrollMagic.Scene({
          triggerElement: "section#pin",
          triggerHook:"onLeave",
        })
        .setTween(pageDown)
        .setPin("section#pin")
        .addTo(controller);


TweenMax.set(['.star_black', '.star_gold'],{display:'none'});
$(window).load(function(){
var star_black_on_triggers = ['#section1','#section3', '#section6', '#section7 .interview_wrap','#section9','#section10','#section12'];
var star_black_off_triggers = ['#section2','#section4', '#section5','#section8','#section11-1','#foot'];

var star_gold_on_triggers = ['#section2 .part_three'];
var star_gold_off_triggers = ['#section3','#section5','#section7','#section8'];

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