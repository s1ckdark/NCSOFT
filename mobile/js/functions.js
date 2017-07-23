$(function() {
/* ######################################################################## */
    //공유 설정
    var snsMore = $("#snsMore");
    $(".forehead .btn-sns-more").on("click",function() {
        snsMore.toggleClass('open');
        return false;
    });
    $("#snsMore .close-modal").on("click",function() {
        snsMore.removeClass('open');
        popupWechat.removeClass("open");
        return false;
    });
    
    var shareUrl = $("meta[property='og:url']").attr("content");
    var popupWechat = $("#popup_wechat");
    $("#snsMore .sns-wc").on("click", function() {
        popupWechat.addClass("open");
        var getWidth =  $("#qrcode").width();
        $("#qrcode").empty().qrcode({width:getWidth,height:getWidth,text:shareUrl});
        return false;
    });
/* ######################################################################## */

    // Lazyload Default 
    $('.lazy').lazyload({
        effect : 'fadeIn'
    });

    //     if ( detectIE() ){
    //     $('body').addClass('ie ie'+detectIE());
    // }
    
    var scrollTop, roofHeight, winHeight;
    var roofHeight = $('#roof').outerHeight();
    var winHeight = $(window).height();
    var viewportWidth = $('#viewport').innerWidth();
   
    var controller = new ScrollMagic.Controller();

    function dateCheck() {
        Date.prototype.yyyymmdd = function() {
          var yyyy = this.getFullYear().toString();
          var mm = (this.getMonth()+1).toString(); // getMonth() is zero-based
          var dd  = this.getDate().toString();
          var hh  = this.getHours().toString(); // Hours(24)
          var min = this.getMinutes().toString();
          var sec = this.getSeconds().toString();
          return yyyy + (mm[1]?mm:'0'+mm[0]) + (dd[1]?dd:'0'+dd[0]); // padding
        };
        var date = new Date();
        var currentDate = date.yyyymmdd();

        // 날짜 체크
        // if( currentDate >= 20170227 ) {
        //     $('#part').show();
        // } else {
        //     $('#part').hide();
        // }
    }
    dateCheck();
    // Defalut
    var scrollTop, roofHeight, winHeight;
    var roofHeight = $('#roof').outerHeight();
    var winHeight = $(window).height();
    var durationEnd = winHeight - roofHeight;
    
    var controller = new ScrollMagic.Controller();    

    /*
        스크립트 시작
    */

    // 네비게이션
    var stageNavOpen = new TimelineMax({paused:true})
            .to('#stageNav', .4, {y:'100%'})
            .to('.btn_nav_open i', .4, {scale:0}, 0)
            .to('.btn_nav_open', .2, {autoAlpha:0})
            .to('#allStageNav', .6, {autoAlpha:1,zIndex:110});

    $('.btn_nav_open, #stageNav .label').on('click', function(e){
        e.preventDefault();
        if( $(this).parent().hasClass('nav_hidden') ){
            alert('모든 컨텐츠를 다 감상하시면 열립니다');
        } else {
            stageNavOpen.restart();
        }
    });
    $('.btn_nav_close').on('click', function(e){
        e.preventDefault();
        stageNavOpen.reverse();
    });


    $('.stage_nav_container').on('click', function(){
      var openNav = $(this).children().children('.menus'), $this=$(this), toggle = openNav.height();
        console.log(openNav); 
        console.log(toggle);
        if(toggle ==0 ) {
               console.log("-> menu Close");
        // TweenMax.to($(this).parent(), 0.5, {visibility:'hidden',opacity:0});
        TweenMax.staggerTo($this, 0.5, {visibility:'hidden',opacity:0});
        TweenMax.staggerTo(openNav, 0.5, {visibility:'hidden',opacity:0});
        TweenMax.staggerTo('.menus_reset', 0.5, {visibility:'hidden',opacity:0});
        TweenMax.to('openNav', .1, {className:"=+active",visibility:'visible', opacity:1});

    } else {
    console.log("-> menu Open"); 
    console.log($this);
        
        TweenMax.to($this, 0.5, {display:'block',position:'fixed',top:'50px',zIndex:999, height:'calc(100vh - 50xpx)'});
        TweenMax.staggerTo(openNav, 0.5, {visibility:'visible',opacity:1});
        TweenMax.staggerTo('.menus_reset', 0.5, {visibility:'visible',opacity:1});
    }
  })
    $('.menus_reset').on('click', function(){
        TweenMax.set('.menus.active', {visibility:'hidden',opacity:0});
        TweenMax.set('.stage_nav_container', {display:'block'});
        TweenMax.to($this, 0.5, {display:'block',position:'relative',zIndex:999});
        TweenMax.staggerTo('.menus_reset', 0.5, {visibility:'hidden',opacity:0});
    })
    // 스테이지 네비게이션
    var sectionBar = [];
    var sectionCount = $('.section_wrap').length;
    for (i = 0; i < sectionCount; i++) {
        sectionBar.push('<b><i></i></b>');
    }
    $('#stageNav .bar').append( sectionBar.join('') );

    $(window).load(function(){
        $('.section_wrap').each(function(){
            var $this = $(this)
            var index = $this.index()

            new ScrollMagic.Scene({
                triggerElement: this,
                triggerHook: 1,
                offset: -roofHeight,
                duration: $this.height()
            })
            .addTo(controller)
            .reverse(false) // 거꾸로 방지
            .on('enter leave progress', function (e) {
                if ( e.type == 'enter') {
                    // console.log('깜빡꺼리기')
                    TweenMax.set('#stageNav .bar b:eq('+$this.index()+') i', {backgroundColor:'#fff'})
                    TweenMax.to('#stageNav .bar b:eq('+$this.index()+') i', .4, {backgroundColor:'#fff' ,opacity:0, repeat:-1, yoyo:true})
                  $('#stageNav .num').text($this.index()+1);
                }
                if ( e.type == 'leave') {
                    // console.log('멈추기')
                        TweenMax.to('#stageNav .bar b:eq('+$this.index()+') i', .3, {opacity:1})
                    
                }
                if ( e.type == 'progress') {
                    // 색깔 칠하기 완료
                    var scrollProgress = Math.floor(e.progress*100);
                    if( scrollProgress == 100 ) {
                       // console.log('색칠 완료')
                        TweenMax.to('#stageNav .bar b:eq('+$this.index()+') i', .3, {opacity:1, backgroundColor:'#d8b17e', clearProps:'all', onComplete:barOn})
                    }
                }
            });
            function barOn(){
                $('#stageNav .bar b:eq('+$this.index()+')').addClass('on') // B태그에 완료 표시
            }
        })
    });

    // 인트로 페이지
    TweenMax.set('#introTitle', {rotationX:20});
    TweenMax.set(['#introText', '#introScroller'], {opacity:0});

    $(window).load(function(){
        var introTextTween = new TimelineMax({onUpdate:introProgress, delay:.4, repeat:-1})
            .fromTo('#introText', .5, {opacity:0}, {opacity:1, ease: Power0.easeNone})
            .to('#introText', 50, {y:'-100%', ease: Power0.easeNone, delay:1})

        var introScrollerTween = new TimelineMax({paused:true})
            .to('#introScroller', .4, {opacity:1})
            .staggerFromTo(['#introScroller .label', '#introScroller i'], .7, {opacity:0, y:-36}, {opacity:1, y:0, clearProps:'all'}, .3)
            .to('#introScroller i', .4, {y:15, repeat:-1, yoyo:true})

        function introProgress() {
            tweenProgress = Math.floor(introTextTween.progress()*100);
            $('.intro_progress .bar').css('height',tweenProgress+'%');

            if (tweenProgress > 15) {
                introScrollerTween.play()
            }
        }
    });


    // 스테이지에 네비게이션
    if( $('#nav').hasClass('at_stage1') || $('#nav').hasClass('at_stage2') || $('#nav').hasClass('at_stage3') ) {

        TweenMax.set('#nav', {top:$('.section_parent').offset().top})

        new ScrollMagic.Scene({
            triggerElement: '.section_parent',
            triggerHook: 0,
            offset: -roofHeight
        })
        .setTween(TweenMax.set('#nav', {top:'calc(100vh - 60px)'}) )
        .setTween(TweenMax.set('.sticky_nav', {opacity:1,visibility:'visible'}) )
        .setClassToggle('.sticky_nav', 'active')
        .addTo(controller)
    }


    // 우주 캔버스
    function initCanvasDark() {
        var win = jQuery(window);
        jQuery('.star_black').each(function() {
            var canvas = this;
            var ctx = canvas.getContext("2d");
            var fps = 30;
            var winWidth, winHeight;
            var mp; //max particles
            var particles = [];
            // var color;

            resizeHandler();

            function draw() {
                ctx.clearRect(0, 0, winWidth, winHeight);

                ctx.fillStyle = '#fff';
                ctx.beginPath();
                for(var i = 0; i < mp; i++) {
                    var p = particles[i];
                    ctx.moveTo(p.x, p.y);
                    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2, true);
                }
                ctx.fill();
                update();
            }

            function update() {
                for(var i = 0; i < mp; i++) {
                    var p = particles[i];
                    p.y += Math.cos(p.d) + 1 + p.r/2;
                        if(p.y > winHeight) {
                            if(i%3 > 0) //66.67% of the flakes
                        {
                            particles[i] = {x: Math.random() * winWidth, y: -10, r: p.r, d: p.d};
                        }
                    }
                }
            }

            function resizeHandler() {
                //canvas dimensions
                winWidth = window.innerWidth;
                winHeight = window.innerHeight;

                canvas.width = winWidth;
                canvas.height = winHeight;

                mp = 0.35 * winWidth;

                particles = [];

                for(var i = 0; i < mp; i++){
                    particles.push({
                        x: Math.random() * winWidth, //x-coordinate
                        y: Math.random() * winHeight, //y-coordinate
                        r: Math.random() * 1.5, //radius
                        d: Math.random() * mp //density
                    })
                }
            };

            win.on('resize', resizeHandler);

            function step() {
                setTimeout(function() {
                    draw();
                    requestAnimationFrame(step);
                }, 1200 / fps);
            };
            step();
        });
    }
    function initCanvasLight() {
        var win = jQuery(window);

        jQuery('.star_white').each(function() {
            var canvas = this;
            var ctx = canvas.getContext("2d");
            var fps = 30;
            var winWidth, winHeight;
            var mp; //max particles
            var particles = [];
            // var color;

            resizeHandler();

            function draw() {
                ctx.clearRect(0, 0, winWidth, winHeight);

                ctx.fillStyle = '#b98746';
                ctx.beginPath();
                for(var i = 0; i < mp; i++) {
                    var p = particles[i];
                    ctx.moveTo(p.x, p.y);
                    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2, true);
                }
                ctx.fill();
                update();
            }

            function update() {
                for(var i = 0; i < mp; i++) {
                    var p = particles[i];
                    p.y += Math.cos(p.d) + 1 + p.r/2;
                        if(p.y > winHeight) {
                            if(i%3 > 0) //66.67% of the flakes
                        {
                            particles[i] = {x: Math.random() * winWidth, y: -10, r: p.r, d: p.d};
                        }
                    }
                }
            }

            function resizeHandler() {
                //canvas dimensions
                winWidth = window.innerWidth;
                winHeight = window.innerHeight;

                canvas.width = winWidth;
                canvas.height = winHeight;

                mp = 0.35 * winWidth;

                particles = [];

                for(var i = 0; i < mp; i++){
                    particles.push({
                        x: Math.random() * winWidth, //x-coordinate
                        y: Math.random() * winHeight, //y-coordinate
                        r: Math.random() * 1.5, //radius
                        d: Math.random() * mp //density
                    })
                }
            };

            win.on('resize', resizeHandler);

            function step() {
                setTimeout(function() {
                    draw();
                    requestAnimationFrame(step);
                }, 1200 / fps);
            };
            step();
        });
    }

    
    initCanvasDark();
    initCanvasLight();


   

    // ovp 연동하기
    // $('#hiddenStage').fnSetVideo({
    // 'ovpUrl': 'http://v.ovp.joins.com/ExXst2VK',
    // 'ovpRo': 1, // 1 = 16:9, 2 = 1:1
    // 'ctrls': false,
    // 'loop': false,
    // 'preload': 'none',
    // 'poster': '/project/NCsoft/video/main_interview_poster.jpg'
    // });
 
    /*
        인터뷰 섹션
    */

       // create scene to pin and link animation
     var $offsetH = $('#pinContainer').innerHeight();
    var productDesignScene = new ScrollMagic.Scene({
        triggerElement: "#pinContainer",
        triggerHook: 0.075,
        duration: $offsetH*3 // 2100 + 1500
        })
        .setPin("#pinContainer")
        .addTo(controller);

  
    var productDesign1897 = new ScrollMagic.Scene({
        triggerElement: "#pinContainer",
        offset: $offsetH
        })
        .setTween(
            new TimelineMax().fromTo(".panel .image1", 1, {opacity: 1}, {opacity: 1, ease: Linear.easeNone})
            .fromTo(".illust1 .desc",1, {opacity: 1}, {opacity: 1, ease: Linear.easeNone})
            .fromTo(".illust1 .desc p",1, {opacity: 0}, {opacity: 1, ease: Linear.easeNone})
        )
        .addTo(controller);
    var productDesign1910 = new ScrollMagic.Scene({
        triggerElement: "#pinContainer",
        offset: $offsetH*2
        })
        .setTween(
            new TimelineMax().fromTo(".panel .image2", 1, {opacity: 0}, {opacity: 1, ease: Linear.easeNone})
         .fromTo(".illust2 .desc",0.5, {opacity: 0}, {opacity: 1, ease: Linear.easeNone})
         .fromTo(".illust2 .desc p",1, {opacity: 0}, {opacity: 1, ease: Linear.easeNone})
        )
        .addTo(controller);

    var productDesign1920 = new ScrollMagic.Scene({
        triggerElement: "#pinContainer",
        offset:  $offsetH*3
        })
        .setTween(
            new TimelineMax().fromTo(".panel .image3", 1, {opacity: 0}, {opacity: 1, ease: Linear.easeNone})
          .fromTo(".illust3 .desc",1, {opacity: 0}, {opacity: 1, ease: Linear.easeNone})
          .fromTo(".illust3 .desc p",1, {opacity: 0}, {opacity: 1, ease: Linear.easeNone})
        )
        .addTo(controller);
   
       function pinContainerText(target) {
        var $target = $(target);
        console.log($target.find('p')[0]);
        new TimelineMax().fromTo($target[0], 0.5, {opacity:0}, {opacity:1})
                        .fromTo($target.find('p')[0], 1, {opacity:0, y:-40}, {opacity:1, y:0});
    }   


/* textTween Effect */
function textTween(e, hook, exception){
     var $e = $(e);
     TweenMax.set($e, {opacity:0, y:40});
     // TweenMax.killTweensOf()
     $e.each(function(){
        var $this = this;
        var sectionTitTween = TweenMax.to($this, .8, {opacity:1, y:0});
        var sectionTitScene = new ScrollMagic.Scene({
            triggerElement: $this,
            triggerHook: hook
        })
        .setTween(sectionTitTween)
        .reverse(false)
        .addTo(controller);
})
}

$('#sectionSharebtn').click(function(){
    var toggle = $('.shareIcon');
     if(!toggle.attr('initH')) toggle.attr('initH', toggle.height()); 

    if(toggle.height() != 0) {
        TweenMax.to(toggle, .2, {height: 0,  visibility:'hidden', opacity:0, y:30});
        console.log("close");
    } else {
        TweenMax.to(toggle, .2, {height: toggle.attr('initH'), visibility:'visible', opacity:1, y:-30});
        TweenMax.to(toggle, .2, {height: toggle.attr('initH'), visibility:'visible', opacity:1, y:-30});
    }
})
// $('.star_black').each(function()
// {
// var scene = new ScrollMagic.Scene({
//             triggerElement: this, 
//             offset: -$(window).height()*0.7,
//             logleve :2
//         })
//         .on('enter', function(){
//             initCanvasDark();
//             console.log("FallingStar");})
//         .addIndicators()
//         .setClassToggle('.goon')
//         .addTo(controller);
// });


});



