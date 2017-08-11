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

    $('body').on("mousewheel", function () {
            event.preventDefault(); 
            var wheelDelta = event.wheelDelta;
            var currentScrollPosition = window.pageYOffset;
            window.scrollTo(0, currentScrollPosition - wheelDelta);
        });

    // Lazyload Default 
    $('.lazy').lazyload({
        effect : 'fadeIn'
    });

    var scrollTop, roofHeight, winHeight;
    var roofHeight = $('#roof').outerHeight();
    var winHeight = $(window).height();
    var viewportWidth = $('#viewport').innerWidth();
       var currentStage = $('#viewport').attr('class');
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

     $('#hiddenvideo').fnSetVideo({
    'ovpUrl': 'http://v.ovp.joins.com/ExXst2VK',
    'ovpRo': 1, // 1 = 16:9, 2 = 1:1
    'ctrls': true,
    'loop': false,
    'auto':true,
    'preload': 'none',
    'poster': '/project/NCSOFT/img/hiddenstage_poster.jpg'
    });

     function checkHidden(){
        var ls1=localStorage.getItem('stage1'), ls2=localStorage.getItem('stage2'), ls3=localStorage.getItem('stage3');
        if(ls1 == 'complete' && ls2 == 'complete' && ls3 == 'complete') { 
            TweenMax.set('.onhiddenstage',{display:'block', zIndex:32});
            // TweenMax.fromTo('.onhiddenstage .intro_title', 1.2,{opacity:0,scale:0,y:100}, {opacity:1, scale:1,ease: Bounce.easeOut,y:0,zIndex:22}, 2);
            TweenMax.to('.btn_nav_open', .1, {display:'none'});

     var introPlay = document.getElementById('introPlay');
     var introPlayLink = document.getElementById('introPlayLink');
     if(introPlay != null) {
    // 플레이 버튼 사라지기
    var playTween = new TimelineMax({paused:true})
        .to(introPlay, .6, {opacity: '0'})
        .to(introPlay, 0, {display: 'none'})
        .to('.onhiddenstage',1,{display:'none', opacity:0})
        .to('#introe',1,{display:'block'})
        .to('#introTitle',1,{display:'block'})
        .to('#intro_progress',1,{display:'block'})
    
    $('.close_video').click(function(){
        TweenMax.to('.onhiddenstage', .5, {display:'none', opacity:0});
          TweenMax.to('.btn_nav_open', .6, {display:'block'});
            
     })
    // 인트로 텍스트 자동 스크롤 트윈
   setTimeout(function() {
            console.log('show hiddenstage');
            console.log("remove localstorage");
            removeHidden();
        }, 5000); 
      // 인트로 플레이 버튼 클릭 이벤트

    introPlayLink.addEventListener('click', function(e) {
        e.preventDefault();
         removeHidden();
        playTween.restart();
     });
            }
       } 
       else 
       {
         TweenMax.set('.onhiddenstage',{display:'none'});
       }
   }
   function removeHidden(){
  localStorage.removeItem('stage1');
  localStorage.removeItem('stage2');
  localStorage.removeItem('stage3');

}

   checkHidden();

    // 네비게이션
    var stageNavOpen = new TimelineMax({paused:true})
            .to('#stageNav', .4, {y:'100%'})
            .to('.btn_nav_open i', .4, {scale:0}, 0)
            .to('.btn_nav_open', .2, {autoAlpha:0})
            .to('#allStageNav', .6, {autoAlpha:1,zIndex:110, height:'calc(100vh - 50px)',top:'50px'});
    stageNavOpen.eventCallback('onReverseComplete', function(){
      $('.menu_ctrl.close').click();
    });
    
    $('.menus a').on('click', function(e){
        e.preventDefault();
        var jump = $(this).attr('href');
        if(currentStage == jump.split('#')[0]) 
        { location.href='#'+jump.split('#')[1];}
    else {
        location.href=jump;
       stageNavOpen.reverse();
    }});


    $('.btn_nav_open, #stageNav .label').not('.label.sns').on('click', function(e){
        e.preventDefault();
        if( $(this).parent().hasClass('nav_hidden') ){
        var ls1=localStorage.getItem('stage1'), ls2=localStorage.getItem('stage2'), ls3=localStorage.getItem('stage3'); 
        if(ls1 && ls2 && ls3) {location.href="index.html"} else {
            alert('모든 컨텐츠를 다 감상하시면 열립니다');}
        } else {
            stageNavOpen.restart();
        }
    });
    $('.btn_nav_close').on('click', function(e){
        e.preventDefault();
        stageNavOpen.reverse();
    });
    TweenMax.set('ol.menus',{display:'none'});
    $('.menu_ctrl').click(function(e){
        e.preventDefault();

        var container = $(this).closest('.stage_nav_container');

        if ($(this).hasClass('open')) {
            // 열기
            TweenMax.set(container.find('.menus'), {display:'block'});
            TweenMax.set($(this), {className:'menu_ctrl close',overwrite:'none'});
            TweenMax.set($('.stage_nav_container').not(container), {display:'none'});
            TweenMax.set(container, {height:'100%'});
            TweenMax.from(container, .4, { opacity: '0'});
            TweenMax.from(container.find('.nav_inner'), .6, { top: '-50px'});
        } else {
            // 닫기
            TweenMax.set(container.find('.menus'), {display:'none'});
            TweenMax.set($(this), {className:'menu_ctrl open',overwrite:'none'});
            TweenMax.set($('.stage_nav_container'), {height:'', display: ''});
        }
    });
     var sectionBar = [];
    var sectionCount = $('.section_wrap').length;
    for (i = 0; i < sectionCount; i++) {
        sectionBar.push('<b><i></i></b>');
    }
    $('#stageNav .bar').append( sectionBar.join('') );
    $(window).load(function(){

        $('.section_wrap').each(function(){
            var index =  $('.section_wrap').index(this);
            var mission = {};
            new ScrollMagic.Scene({
                triggerElement: this,
                triggerHook: 1,
                offset: -roofHeight,
                duration: $(this).height()
            })
            .addTo(controller)
            .reverse(false) // 거꾸로 방지
            .on('enter leave progress', function (e) {
                if ( e.type == 'enter') {
                    // console.log('깜빡꺼리기')
                    TweenMax.set('#stageNav .bar b:eq('+index+') i', {backgroundColor:'#fff'})
                    TweenMax.to('#stageNav .bar b:eq('+index+') i', .4, {backgroundColor:'#fff' ,opacity:0, repeat:-1, yoyo:true})
                }
                // if ( e.type == 'leave') {
                //     // console.log('멈추기')
                //         TweenMax.to('#stageNav .bar b:eq('+$this.index()+') i', .3, {opacity:1})
                //          mission.progress = $this.attr('id'); 
    
                //         // console.log(JSON.stringify(mission));
                //         // mission.currentStage = { progress: index };
                //          // localStorage.setItem('mission', JSON.stringify(mission));
                //                               }
                if ( e.type == 'progress') {
                    // 색깔 칠하기 완료
                    var scrollProgress = Math.floor(e.progress*100);
                    if( scrollProgress == 100 ) {
                       // console.log('색칠 완료')
                       TweenMax.to('#stageNav .bar b:eq('+index+') i', .3, {opacity:1, backgroundColor:'#d8b17e', clearProps:'all', onComplete:barOn})
                
                    }
                }
            });
            function barOn(){
                $('#stageNav .bar b:eq('+index+')').addClass('on') // B태그에 완료 표시
                $('#stageNav .num').text(index+1 +'/'+ sectionCount);
                if(index+1 == sectionCount) localStorage.setItem(currentStage, "complete");
            }
        })
        $('.section_wrap').each(function(i,e){
    var dur = $(this).eq(0).height();
    var sectionShare = new ScrollMagic.Scene({
        triggerElement:e,
        triggerHook:'onCenter',
        duration:dur
    })
    .setClassToggle(e, "active_section") 
    .addTo(controller)
}) // 활성화된 section class check - add active_section

$('.shareIcon a').click(function(){

var target = $(this).data('sns');
var share = $('.active_section');
var shareUrl = $("meta[property='og:url']").attr("content")+'#'+$('.active_section').attr('id');
var shareImg = $("meta[property='og:image']").attr("content");
var string = share.find('p').text().split(' ').join('').slice(0,200);;
var shareTit = share.data('title');

var section_url = encodeURIComponent( shareUrl ); //공유 URL
var section_tit = encodeURIComponent( share.data('title'));
var section_txt = encodeURIComponent( string);
var section_img = encodeURIComponent( shareImg);

if(target =='fb'){
     $("meta[property='og:image']").attr({"content":share.data('img')});
    $(this).attr({
       'href':'https://www.facebook.com/dialog/feed?app_id=978722652150941&display=popup&name='+section_tit+'&description='+section_txt+'&link='+section_url+'&redirect_uri='+section_url+'&picture='+section_img,
       'target':'_blank'});
} else if(target == 'tw') {
    $(this).attr({
       'href':'https://twitter.com/share?url='+section_url+'&text='+section_tit,
       'target':'_blank'});

} else if(target == 'kakao') {
    // alert("서비스 준비 중 입니다.");
 //     $(this).attr({
 //         'href':'https://story.kakao.com/s/share?url='+section_url+'&text='+section_txt+'&imageurl='+section_img+'&title='+section_tit+'&kakao_agent=sdk%2F1.3.0%20os%2Fjavascript%20lang%2Fko%20device%2FWin32%20origin%2Fhttp%253A%252F%252Filab.joins.com&app_key=0ea6b97767c7ca7b384389c25beb691f',
 //         'target':'_blank'
 // });
     // Kakao.init('0ea6b97767c7ca7b384389c25beb691f');
    Kakao.Link && Kakao.Link.sendDefault({
                        objectType: 'feed', 
                        content: {
                            title: section_tit,
                            description: section_txt,
                            imageUrl: section_img,
                            link: {
                                mobileWebUrl: 'http://ilab.joins.com/project/NCSOFT/mobile/',
                                webUrl: 'http://ilab.joins.com/project/NCSOFT/'
                            }
                        },
                        installTalk: true,
                        fail: function () { alert('지원하지 않는 플랫폼입니다.'); }
                    });
} else if(target == 'kakaostory') {
    $(this).attr({
        'href':'https://story.kakao.com/share?url='+section_url,
        'target':'_blank'
});
} else if(target == 'copytoclip') {
      window.prompt("Copy to clipboard: Ctrl+C, Enter", shareUrl);
}


})
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

    if($('.onhiddenstage')) {  initCanvasDark();}
    // initCanvasDark();
    // initCanvasLight();

 
    /*
        인터뷰 섹션
    */

   


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
        $(this).removeClass('close').addClass('open');
        console.log("close");
    } else {
        TweenMax.to(toggle, .2, {height: toggle.attr('initH'), visibility:'visible', opacity:1, y:-30});
         $(this).removeClass('open').addClass('close');
    }
})


function pinSwiper(){
    var swiper = new Swiper('#pinContainer', {
    preloadImages: false,
    lazyLoading: true,
    slidesPerView: '1',
    paginationClickable: true,
    nextButton:'.pin-next',
    prevButton:'.pin-prev',
    lazyLoadingOnTransitionStart:true,
    pagination: '.progress_pin',
    paginationClickable: true,
    paginationBulletRender: function (swiper, index, className) {
      return '<span class="' + className + '"></span>';
  }
    });
}  

function interviewSwiper(){
    var swiper = new Swiper('.interviewSwiper', {
    preloadImages: false,
    lazyLoading: true,
    slidesPerView: '1',
    paginationClickable: true,
    nextButton:'.interview-next',
    prevButton:'.interview-prev',
    lazyLoadingOnTransitionStart:true,
    pagination: '.progress_num',
    paginationClickable: true,
    paginationType: "custom",
    paginationCustomRender: function (swiper, current, total) {
      return '<span class="current">'+ current + '</span><span class="last">' + total +'</span>';
  }
    });
}  
interviewSwiper();
pinSwiper();


});

